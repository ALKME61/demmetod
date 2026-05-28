from decimal import Decimal

from calculations import calculate_min_purchase_cost

cases = [
    (1570, 5500, 30, Decimal("15.29")),
    (3000, 3000, 30, Decimal("17.6666667")),
    (500, 1500, 15, Decimal("76.59")),
]

for case in cases:
    print(case, "->", calculate_min_purchase_cost(*case))
