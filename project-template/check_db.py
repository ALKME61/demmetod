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
