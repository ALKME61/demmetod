# Этап 4. Схема базы данных

<div class="module-badges">
  <span class="module-badge">Модуль 1</span>
  <span class="module-note">3НФ, PK/FK, связи</span>
</div>

::: info Отметка по модулю
Создаём таблицы подсистемы материалов, первичные и внешние ключи, связи и raw-таблицы импорта.
::: 


## Что делаем

Создаём таблицы для материалов, типов материалов, типов продукции, поставщиков и связей между материалами и поставщиками.

## Таблицы

Рабочие таблицы:

- `material_types`;
- `product_types`;
- `suppliers`;
- `materials`;
- `material_suppliers`.

Временные таблицы для импорта:

- `materials_import_raw`;
- `material_suppliers_import_raw`.

## SQL-скрипт

Откройте базу `mosaic_demo` в phpMyAdmin, перейдите во вкладку **SQL** и выполните:

```sql
USE mosaic_demo;
SET NAMES utf8mb4;

DROP TABLE IF EXISTS material_suppliers;
DROP TABLE IF EXISTS materials;
DROP TABLE IF EXISTS suppliers;
DROP TABLE IF EXISTS product_types;
DROP TABLE IF EXISTS material_types;
DROP TABLE IF EXISTS materials_import_raw;
DROP TABLE IF EXISTS material_suppliers_import_raw;

CREATE TABLE material_types (
  material_type_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  loss_percent DECIMAL(10,4) NOT NULL CHECK (loss_percent >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_types (
  product_type_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  coefficient DECIMAL(10,2) NOT NULL CHECK (coefficient > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE suppliers (
  supplier_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL UNIQUE,
  supplier_type VARCHAR(50) NOT NULL,
  inn VARCHAR(12) NOT NULL UNIQUE,
  rating INT NOT NULL CHECK (rating >= 0),
  start_date DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE materials (
  material_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL UNIQUE,
  material_type_id INT NOT NULL,
  unit_price DECIMAL(12,2) NOT NULL CHECK (unit_price >= 0),
  stock_quantity INT NOT NULL CHECK (stock_quantity >= 0),
  min_quantity INT NOT NULL CHECK (min_quantity >= 0),
  package_quantity INT NOT NULL CHECK (package_quantity > 0),
  unit_name VARCHAR(20) NOT NULL,
  CONSTRAINT fk_materials_type
    FOREIGN KEY (material_type_id)
    REFERENCES material_types(material_type_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE material_suppliers (
  material_id INT NOT NULL,
  supplier_id INT NOT NULL,
  PRIMARY KEY (material_id, supplier_id),
  CONSTRAINT fk_ms_material
    FOREIGN KEY (material_id)
    REFERENCES materials(material_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
  CONSTRAINT fk_ms_supplier
    FOREIGN KEY (supplier_id)
    REFERENCES suppliers(supplier_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_materials_type ON materials(material_type_id);
CREATE INDEX idx_ms_supplier ON material_suppliers(supplier_id);

CREATE TABLE materials_import_raw (
  name VARCHAR(150) NOT NULL,
  material_type_name VARCHAR(100) NOT NULL,
  unit_price DECIMAL(12,2) NOT NULL,
  stock_quantity INT NOT NULL,
  min_quantity INT NOT NULL,
  package_quantity INT NOT NULL,
  unit_name VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE material_suppliers_import_raw (
  material_name VARCHAR(150) NOT NULL,
  supplier_name VARCHAR(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## Почему нужны raw-таблицы

В исходных данных материалы часто связаны с типами и поставщиками по текстовым названиям. Raw-таблицы позволяют сначала загрузить текст, а потом перенести данные в нормализованные таблицы с внешними ключами.

## Критерий готовности этапа

В phpMyAdmin видны все рабочие и временные таблицы, ошибок SQL нет.
