# Этап 6. Контроль базы данных

<div class="module-badges">
  <span class="module-badge">Модуль 1</span>
  <span class="module-note">Контроль БД</span>
</div>

::: info Отметка по модулю
Проверяем импорт, связи, перенос raw-данных и готовность базы к подключению приложения.
::: 


## Что делаем

Проверяем, что импорт прошёл корректно и данные действительно попали в рабочие таблицы.

## Проверка количества строк

Выполните SQL:

```sql
USE mosaic_demo;

SELECT 'material_types' AS table_name, COUNT(*) AS cnt FROM material_types
UNION ALL
SELECT 'product_types', COUNT(*) FROM product_types
UNION ALL
SELECT 'suppliers', COUNT(*) FROM suppliers
UNION ALL
SELECT 'materials', COUNT(*) FROM materials
UNION ALL
SELECT 'material_suppliers', COUNT(*) FROM material_suppliers;
```

## Как оценить результат

Сравните количество строк с индивидуальными приложениями.

Например:

| Таблица | Что сравнивать |
|---|---|
| `material_types` | количество типов материалов |
| `product_types` | количество типов продукции |
| `suppliers` | количество поставщиков |
| `materials` | количество материалов |
| `material_suppliers` | количество связей материал-поставщик |

## Быстрая проверка связей

```sql
SELECT
  m.name AS material,
  mt.name AS material_type,
  COUNT(ms.supplier_id) AS suppliers_count
FROM materials m
JOIN material_types mt ON mt.material_type_id = m.material_type_id
LEFT JOIN material_suppliers ms ON ms.material_id = m.material_id
GROUP BY m.material_id, m.name, mt.name
ORDER BY m.material_id;
```

## Критерий готовности этапа

Количество строк совпадает с индивидуальным вариантом, а запрос со связями возвращает материалы с их типами и количеством поставщиков.
