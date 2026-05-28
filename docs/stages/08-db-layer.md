# Этап 8. Подключение к базе данных

<div class="module-badges">
  <span class="module-badge">Модуль 2</span>
  <span class="module-note">Подключение БД</span>
</div>

::: info Отметка по модулю
Подключаем созданную базу данных к приложению учёта материалов.
::: 


## Что делаем

Создаём отдельный модуль для подключения к MySQL. Это позволит не повторять настройки подключения во всех файлах.

## Файл `db.py`

Создайте `C:\demoexam_python\db.py`:

```python
import mysql.connector

DB_CONFIG = {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "demo",
    "password": "demo",
    "database": "mosaic_demo",
    "charset": "utf8mb4",
    "use_unicode": True,
    "use_pure": True,
}


def get_connection():
    return mysql.connector.connect(**DB_CONFIG)
```

::: warning
Если используется XAMPP или локальный MySQL, параметры `user` и `password` могут отличаться. Например, часто используется пользователь `root` с пустым паролем.
:::

## Файл `check_db.py`

Создайте `C:\demoexam_python\check_db.py`:

```python
from db import get_connection


def main():
    conn = None
    cursor = None

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT 1")
        result = cursor.fetchone()
        print(f"OK: подключение работает, SELECT 1 -> {result[0]}")
    except Exception as error:
        print("ERROR:", error)
    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None and conn.is_connected():
            conn.close()


if __name__ == "__main__":
    main()
```

## Запуск проверки

```bat
cd C:\demoexam_python
.\.venv\Scripts\activate
python check_db.py
```

## Критерий готовности этапа

В консоли появляется сообщение об успешном подключении.
