# Этап 5. Импорт данных

<div class="module-badges">
  <span class="module-badge">Модуль 1</span>
  <span class="module-note">Импорт данных</span>
</div>

::: info Отметка по модулю
Подготавливаем CSV из индивидуальных файлов и загружаем данные в MySQL.
::: 


## Что делаем

Загружаем индивидуальные CSV-файлы в таблицы MySQL через phpMyAdmin.

## Порядок импорта

Импорт выполняется именно в таком порядке:

1. `material_types`;
2. `product_types`;
3. `suppliers`;
4. `materials_import_raw`;
5. `material_suppliers_import_raw`.

Такой порядок нужен, потому что материалы зависят от типов материалов, а связи материал-поставщик зависят от уже загруженных материалов и поставщиков.

## Настройки CSV в phpMyAdmin

Для каждого файла в phpMyAdmin откройте нужную таблицу и нажмите **Импорт**.

Типовые настройки:

```txt
Формат: CSV
Разделитель полей: ;
Значения полей обрамлены: "
Разделитель строк: auto
```

Если ваш CSV сохранён с запятыми, в поле разделителя укажите `,`.

## Поля для импорта

### `material_types`

```txt
name,loss_percent
```

### `product_types`

```txt
name,coefficient
```

### `suppliers`

```txt
name,supplier_type,inn,rating,start_date
```

### `materials_import_raw`

```txt
name,material_type_name,unit_price,stock_quantity,min_quantity,package_quantity,unit_name
```

### `material_suppliers_import_raw`

```txt
material_name,supplier_name
```

## Перенос из raw-таблиц

После импорта временных таблиц выполните SQL:

```sql
USE mosaic_demo;

INSERT INTO materials (
  name,
  material_type_id,
  unit_price,
  stock_quantity,
  min_quantity,
  package_quantity,
  unit_name
)
SELECT
  r.name,
  mt.material_type_id,
  r.unit_price,
  r.stock_quantity,
  r.min_quantity,
  r.package_quantity,
  r.unit_name
FROM materials_import_raw r
JOIN material_types mt ON mt.name = r.material_type_name;

INSERT INTO material_suppliers (material_id, supplier_id)
SELECT
  m.material_id,
  s.supplier_id
FROM material_suppliers_import_raw r
JOIN materials m ON m.name = r.material_name
JOIN suppliers s ON s.name = r.supplier_name;
```

## Критерий готовности этапа

Данные загружены в рабочие таблицы `materials` и `material_suppliers`, а не только во временные raw-таблицы.
