import sys
from decimal import Decimal, InvalidOperation
from pathlib import Path

from PyQt6.QtCore import Qt
from PyQt6.QtGui import QFont, QIcon, QPixmap
from PyQt6.QtWidgets import (
    QApplication,
    QComboBox,
    QDialog,
    QFormLayout,
    QFrame,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QMainWindow,
    QMessageBox,
    QPushButton,
    QScrollArea,
    QTableWidget,
    QTableWidgetItem,
    QVBoxLayout,
    QWidget,
)

from calculations import calculate_min_purchase_cost
from db import get_connection

COLOR_MAIN_BG = "#FFFFFF"
COLOR_CARD_BG = "#ABCFCE"
COLOR_ACCENT = "#546F94"

BASE_DIR = Path(__file__).resolve().parent
RESOURCES_DIR = BASE_DIR / "resources"
LOGO_PATH = RESOURCES_DIR / "Мозаика.png"
ICON_PATH = RESOURCES_DIR / "Мозаика.ico"


class MaterialCard(QFrame):
    def __init__(self, material: dict, on_edit, on_suppliers):
        super().__init__()
        self.setObjectName("MaterialCard")
        self.setStyleSheet(f"""
            QFrame#MaterialCard {{
                background-color: {COLOR_CARD_BG};
                border: 1px solid #7c9a99;
                border-radius: 10px;
            }}
            QLabel {{
                background: transparent;
                border: none;
            }}
            QPushButton {{
                background-color: {COLOR_ACCENT};
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 6px;
            }}
            QPushButton:hover {{
                opacity: 0.9;
            }}
        """)

        cost = calculate_min_purchase_cost(
            stock_quantity=material["stock_quantity"],
            min_quantity=material["min_quantity"],
            package_quantity=material["package_quantity"],
            unit_price=Decimal(str(material["unit_price"])),
        )

        root = QHBoxLayout(self)
        root.setContentsMargins(16, 14, 16, 14)

        left = QVBoxLayout()
        right = QVBoxLayout()

        title = QLabel(f'{material["material_type"]} | {material["name"]}')
        title.setStyleSheet("font-size: 20px; font-weight: 700;")

        left.addWidget(title)
        left.addWidget(QLabel(f'Минимальное количество: {material["min_quantity"]} {material["unit_name"]}'))
        left.addWidget(QLabel(f'Количество на складе: {material["stock_quantity"]} {material["unit_name"]}'))
        left.addWidget(QLabel(f'Цена: {Decimal(str(material["unit_price"])).quantize(Decimal("0.01"))} р.'))

        cost_label = QLabel(f"Стоимость партии: {cost} р.")
        cost_label.setStyleSheet("font-size: 22px; font-weight: 700;")
        right.addWidget(cost_label, alignment=Qt.AlignmentFlag.AlignRight)

        buttons = QHBoxLayout()
        edit_button = QPushButton("Редактировать")
        suppliers_button = QPushButton("Поставщики")
        edit_button.clicked.connect(lambda: on_edit(material["material_id"]))
        suppliers_button.clicked.connect(lambda: on_suppliers(material["material_id"], material["name"]))
        buttons.addWidget(edit_button)
        buttons.addWidget(suppliers_button)

        right.addLayout(buttons)
        right.addStretch()

        root.addLayout(left, stretch=4)
        root.addLayout(right, stretch=2)


class MaterialFormDialog(QDialog):
    def __init__(self, material_types: list[dict], material: dict | None = None):
        super().__init__()
        self.material = material
        self.saved_data = None
        self.setWindowTitle("Материал")
        self.setMinimumWidth(520)

        layout = QVBoxLayout(self)
        form = QFormLayout()

        self.name_edit = QLineEdit()
        self.type_combo = QComboBox()
        self.stock_edit = QLineEdit()
        self.unit_edit = QLineEdit()
        self.package_edit = QLineEdit()
        self.min_edit = QLineEdit()
        self.price_edit = QLineEdit()

        for material_type in material_types:
            self.type_combo.addItem(material_type["name"], material_type["material_type_id"])

        form.addRow("Наименование:", self.name_edit)
        form.addRow("Тип материала:", self.type_combo)
        form.addRow("Количество на складе:", self.stock_edit)
        form.addRow("Единица измерения:", self.unit_edit)
        form.addRow("Количество в упаковке:", self.package_edit)
        form.addRow("Минимальное количество:", self.min_edit)
        form.addRow("Цена единицы:", self.price_edit)
        layout.addLayout(form)

        buttons = QHBoxLayout()
        save_button = QPushButton("Сохранить")
        cancel_button = QPushButton("Отмена")
        save_button.clicked.connect(self.on_save)
        cancel_button.clicked.connect(self.reject)
        buttons.addWidget(save_button)
        buttons.addWidget(cancel_button)
        layout.addLayout(buttons)

        if material is not None:
            self.name_edit.setText(str(material["name"]))
            index = self.type_combo.findData(material["material_type_id"])
            if index >= 0:
                self.type_combo.setCurrentIndex(index)
            self.stock_edit.setText(str(material["stock_quantity"]))
            self.unit_edit.setText(str(material["unit_name"]))
            self.package_edit.setText(str(material["package_quantity"]))
            self.min_edit.setText(str(material["min_quantity"]))
            self.price_edit.setText(str(material["unit_price"]))

    def on_save(self):
        name = self.name_edit.text().strip()
        unit_name = self.unit_edit.text().strip()

        if not name or not unit_name:
            QMessageBox.warning(self, "Проверка", "Заполните наименование и единицу измерения.")
            return

        try:
            stock_quantity = int(self.stock_edit.text().strip())
            package_quantity = int(self.package_edit.text().strip())
            min_quantity = int(self.min_edit.text().strip())
            unit_price = Decimal(self.price_edit.text().strip().replace(",", "."))
        except (ValueError, InvalidOperation):
            QMessageBox.critical(self, "Ошибка", "Проверьте числовые поля.")
            return

        if stock_quantity < 0 or min_quantity < 0 or package_quantity <= 0 or unit_price < 0:
            QMessageBox.critical(
                self,
                "Ошибка",
                "Остаток и минимум не могут быть отрицательными, упаковка должна быть больше 0, цена не может быть отрицательной.",
            )
            return

        if unit_price.as_tuple().exponent < -2:
            QMessageBox.warning(self, "Проверка", "Цена должна содержать не более двух знаков после запятой.")
            return

        self.saved_data = {
            "name": name,
            "material_type_id": self.type_combo.currentData(),
            "stock_quantity": stock_quantity,
            "unit_name": unit_name,
            "package_quantity": package_quantity,
            "min_quantity": min_quantity,
            "unit_price": unit_price,
        }
        self.accept()


class SuppliersDialog(QDialog):
    def __init__(self, material_name: str, suppliers: list[dict]):
        super().__init__()
        self.setWindowTitle(f"Поставщики: {material_name}")
        self.setMinimumWidth(700)

        layout = QVBoxLayout(self)
        table = QTableWidget()
        table.setColumnCount(3)
        table.setHorizontalHeaderLabels(["Поставщик", "Рейтинг", "Дата начала работы"])
        table.setRowCount(len(suppliers))

        for row_index, supplier in enumerate(suppliers):
            table.setItem(row_index, 0, QTableWidgetItem(str(supplier["name"])))
            table.setItem(row_index, 1, QTableWidgetItem(str(supplier["rating"])))
            table.setItem(row_index, 2, QTableWidgetItem(str(supplier["start_date"])))

        table.resizeColumnsToContents()
        layout.addWidget(table)

        close_button = QPushButton("Назад")
        close_button.clicked.connect(self.close)
        layout.addWidget(close_button, alignment=Qt.AlignmentFlag.AlignRight)


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Учет материалов")
        self.resize(1200, 800)

        if ICON_PATH.exists():
            self.setWindowIcon(QIcon(str(ICON_PATH)))

        self.setStyleSheet(f"""
            QWidget {{
                font-family: 'Comic Sans MS';
                font-size: 13px;
                background-color: {COLOR_MAIN_BG};
            }}
            QPushButton {{
                background-color: {COLOR_ACCENT};
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 6px;
            }}
        """)

        root = QWidget()
        root_layout = QVBoxLayout(root)

        header = QHBoxLayout()
        logo_label = QLabel()
        if LOGO_PATH.exists():
            logo_label.setPixmap(QPixmap(str(LOGO_PATH)).scaled(80, 80, Qt.AspectRatioMode.KeepAspectRatio))

        title = QLabel("Список материалов")
        title.setStyleSheet("font-size: 28px; font-weight: 700;")

        add_button = QPushButton("Добавить материал")
        refresh_button = QPushButton("Обновить")
        add_button.clicked.connect(self.add_material)
        refresh_button.clicked.connect(self.load_materials)

        header.addWidget(logo_label)
        header.addWidget(title)
        header.addStretch()
        header.addWidget(add_button)
        header.addWidget(refresh_button)
        root_layout.addLayout(header)

        self.cards_layout = QVBoxLayout()
        self.cards_layout.setSpacing(14)
        cards_container = QWidget()
        cards_container.setLayout(self.cards_layout)

        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setWidget(cards_container)
        root_layout.addWidget(scroll)

        self.setCentralWidget(root)
        self.load_materials()

    def fetch_material_types(self) -> list[dict]:
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT material_type_id, name FROM material_types ORDER BY name")
            return cursor.fetchall()
        finally:
            conn.close()

    def fetch_materials(self) -> list[dict]:
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                """
                SELECT
                  m.material_id,
                  m.name,
                  m.material_type_id,
                  mt.name AS material_type,
                  m.unit_price,
                  m.stock_quantity,
                  m.min_quantity,
                  m.package_quantity,
                  m.unit_name
                FROM materials m
                JOIN material_types mt ON mt.material_type_id = m.material_type_id
                ORDER BY m.material_id
                """
            )
            return cursor.fetchall()
        finally:
            conn.close()

    def fetch_suppliers(self, material_id: int) -> list[dict]:
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                """
                SELECT s.name, s.rating, s.start_date
                FROM material_suppliers ms
                JOIN suppliers s ON s.supplier_id = ms.supplier_id
                WHERE ms.material_id = %s
                ORDER BY s.name
                """,
                (material_id,),
            )
            return cursor.fetchall()
        finally:
            conn.close()

    def clear_cards(self):
        while self.cards_layout.count():
            item = self.cards_layout.takeAt(0)
            widget = item.widget()
            if widget is not None:
                widget.deleteLater()

    def load_materials(self):
        self.clear_cards()
        try:
            materials = self.fetch_materials()
            for material in materials:
                self.cards_layout.addWidget(MaterialCard(material, self.edit_material, self.show_suppliers))
            self.cards_layout.addStretch()
        except Exception as error:
            QMessageBox.critical(self, "Ошибка", f"Не удалось загрузить материалы: {error}")

    def add_material(self):
        material_types = self.fetch_material_types()
        dialog = MaterialFormDialog(material_types)

        if dialog.exec() != QDialog.DialogCode.Accepted:
            return

        data = dialog.saved_data
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO materials
                  (name, material_type_id, unit_price, stock_quantity, min_quantity, package_quantity, unit_name)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                """,
                (
                    data["name"],
                    data["material_type_id"],
                    str(data["unit_price"]),
                    data["stock_quantity"],
                    data["min_quantity"],
                    data["package_quantity"],
                    data["unit_name"],
                ),
            )
            conn.commit()
            self.load_materials()
        except Exception as error:
            QMessageBox.critical(self, "Ошибка", f"Не удалось добавить материал: {error}")
        finally:
            conn.close()

    def edit_material(self, material_id: int):
        material = next((item for item in self.fetch_materials() if item["material_id"] == material_id), None)
        if material is None:
            QMessageBox.critical(self, "Ошибка", "Материал не найден.")
            return

        dialog = MaterialFormDialog(self.fetch_material_types(), material)
        if dialog.exec() != QDialog.DialogCode.Accepted:
            return

        data = dialog.saved_data
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                """
                UPDATE materials
                SET
                  name = %s,
                  material_type_id = %s,
                  unit_price = %s,
                  stock_quantity = %s,
                  min_quantity = %s,
                  package_quantity = %s,
                  unit_name = %s
                WHERE material_id = %s
                """,
                (
                    data["name"],
                    data["material_type_id"],
                    str(data["unit_price"]),
                    data["stock_quantity"],
                    data["min_quantity"],
                    data["package_quantity"],
                    data["unit_name"],
                    material_id,
                ),
            )
            conn.commit()
            self.load_materials()
        except Exception as error:
            QMessageBox.critical(self, "Ошибка", f"Не удалось изменить материал: {error}")
        finally:
            conn.close()

    def show_suppliers(self, material_id: int, material_name: str):
        suppliers = self.fetch_suppliers(material_id)
        dialog = SuppliersDialog(material_name, suppliers)
        dialog.exec()


def main():
    app = QApplication(sys.argv)
    app.setFont(QFont("Comic Sans MS", 11))
    window = MainWindow()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
