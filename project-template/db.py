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
