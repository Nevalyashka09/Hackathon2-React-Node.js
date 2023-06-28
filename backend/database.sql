DROP TABLE IF EXISTS users;

CREATE TABLE
    users (
        id int PRIMARY KEY AUTO_INCREMENT,
        is_admin boolean,
        email varchar(255)
    );

INSERT INTO
    users (is_admin, email)
VALUES (
        true,
        'utilisateur1@example.com'
    ), (
        false,
        'utilisateur2@example.com'
    );

DROP TABLE IF EXISTS smartphones;

CREATE TABLE
    smartphones (
        id int PRIMARY KEY AUTO_INCREMENT,
        brand varchar(255),
        model varchar(255),
        price int
    );

INSERT INTO
    smartphones (brand, model, price)
VALUES ('Apple', 'iPhone 13', 1099), ('Apple', 'iPhone 13 Pro', 1199), ('Apple', 'iPhone 13 mini', 799), ('Apple', 'iPhone 12', 899), ('Apple', 'iPhone 12 Pro', 999), ('Apple', 'iPhone SE', 399), ('Apple', 'iPhone 11', 699), ('Apple', 'iPhone XR', 599), ('Apple', 'iPhone XS', 999), ('Apple', 'iPhone 8', 449), ('Apple', 'iPhone SE 2020', 399), ('Apple', 'iPhone X', 799), ('Apple', 'iPhone 7', 449), ('Apple', 'iPhone 6s', 299), (
        'Apple',
        'iPhone SE 2nd Gen',
        449
    ), ('Apple', 'iPhone XS Max', 1099), ('Apple', 'iPhone 12 mini', 699), ('Apple', 'iPhone 11 Pro', 999), (
        'Apple',
        'iPhone 11 Pro Max',
        1099
    ), (
        'Apple',
        'iPhone 12 Pro Max',
        1199
    );

INSERT INTO
    smartphones (brand, model, price)
VALUES (
        'Samsung',
        'Galaxy S21 Ultra',
        1299
    ), (
        'Samsung',
        'Galaxy S21 Plus',
        999
    ), ('Samsung', 'Galaxy S21', 799), (
        'Samsung',
        'Galaxy Note 20 Ultra',
        1299
    ), (
        'Samsung',
        'Galaxy Note 20',
        999
    ), (
        'Samsung',
        'Galaxy S20 Ultra',
        1199
    ), (
        'Samsung',
        'Galaxy S20 Plus',
        999
    ), (
        'Samsung',
        'Galaxy S20 FE',
        699
    ), ('Samsung', 'Galaxy A71', 499), ('Samsung', 'Galaxy A52', 399), ('Samsung', 'Galaxy S10', 899), (
        'Samsung',
        'Galaxy S10 Plus',
        999
    ), ('Samsung', 'Galaxy S10e', 749), (
        'Samsung',
        'Galaxy Note 10',
        949
    ), (
        'Samsung',
        'Galaxy Note 10 Plus',
        1049
    ), ('Samsung', 'Galaxy S9', 699), (
        'Samsung',
        'Galaxy S9 Plus',
        799
    ), ('Samsung', 'Galaxy A50', 349), ('Samsung', 'Galaxy A20', 199), ('Samsung', 'Galaxy M51', 399);

INSERT INTO
    smartphones (brand, model, price)
VALUES ('Sony', 'Xperia 1 III', 1299), ('Sony', 'Xperia 5 III', 1099), ('Sony', 'Xperia 10 III', 499), ('Sony', 'Xperia 5 II', 899), ('Sony', 'Xperia 1 II', 1099), ('Sony', 'Xperia 10 II', 399), ('Sony', 'Xperia 5', 799), ('Sony', 'Xperia 1', 1099), ('Sony', 'Xperia XZ3', 699), ('Sony', 'Xperia XZ2', 599), ('Sony', 'Xperia XZ1', 499), (
        'Sony',
        'Xperia XZ1 Compact',
        399
    ), ('Sony', 'Xperia 10', 349), ('Sony', 'Xperia L4', 249), ('Sony', 'Xperia XA2', 299), (
        'Sony',
        'Xperia XA2 Ultra',
        399
    ), (
        'Sony',
        'Xperia XZ Premium',
        599
    ), ('Sony', 'Xperia XZs', 499), ('Sony', 'Xperia L3', 199), ('Sony', 'Xperia XA1', 249);