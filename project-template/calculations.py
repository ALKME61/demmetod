from decimal import Decimal, ROUND_HALF_UP
from math import ceil

from db import get_connection


def calculate_min_purchase_cost(
    stock_quantity: int,
    min_quantity: int,
    package_quantity: int,
    unit_price: Decimal,
) -> Decimal:
    if stock_quantity >= min_quantity:
        return Decimal("0.00")

    deficit = min_quantity - stock_quantity
    purchase_quantity = ceil(deficit / package_quantity) * package_quantity
    total = Decimal(purchase_quantity) * Decimal(unit_price)

    if total < 0:
        return Decimal("0.00")

    return total.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


def calculate_products_count(
    product_type_id: int,
    material_type_id: int,
    raw_amount: int,
    param1: float,
    param2: float,
) -> int:
    if (
        product_type_id <= 0
        or material_type_id <= 0
        or raw_amount < 0
        or param1 <= 0
        or param2 <= 0
    ):
        return -1

    conn = get_connection()

    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute(
            """
            SELECT
              pt.coefficient,
              mt.loss_percent
            FROM product_types pt
            JOIN material_types mt ON mt.material_type_id = %s
            WHERE pt.product_type_id = %s
            """,
            (material_type_id, product_type_id),
        )
        row = cursor.fetchone()

        if row is None:
            return -1

        raw_per_unit = (
            Decimal(str(param1))
            * Decimal(str(param2))
            * Decimal(str(row["coefficient"]))
        )
        raw_per_unit *= Decimal("1") + Decimal(str(row["loss_percent"]))

        if raw_per_unit <= 0:
            return -1

        return int(Decimal(raw_amount) // raw_per_unit)
    finally:
        conn.close()
