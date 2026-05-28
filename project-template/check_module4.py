from calculations import calculate_products_count

checks = [
    (1, 1, 1000, 2.5, 1.5),
    (2, 4, 5000, 1.2, 2.1),
    (4, 5, 12000, 3.0, 0.8),
    (99, 1, 100, 1.0, 1.0),
    (1, 1, 100, -1.0, 2.0),
]

for check in checks:
    print(check, "->", calculate_products_count(*check))
