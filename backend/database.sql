DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int PRIMARY KEY AUTO_INCREMENT,
    is_admin boolean,
    email varchar(255)
);

INSERT INTO users (is_admin, email)
VALUES
    (true, 'utilisateur1@example.com'),
    (false, 'utilisateur2@example.com');

DROP TABLE IF EXISTS smartphones;

CREATE TABLE smartphones (
    smartphones_id int PRIMARY KEY AUTO_INCREMENT,
    brand varchar(255),
    model varchar(255),
    price int,
    logo varchar(255)
);

INSERT INTO smartphones (brand, model, price, logo)
VALUES
    ('Apple', 'iPhone 13', 1099, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 13 Pro', 1199, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 13 mini', 799, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 12', 899, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 12 Pro', 999, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone SE', 399, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 11', 699, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone XR', 599, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone XS', 999, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 8', 449, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone SE 2020', 399, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone X', 799, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 7', 449, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 6s', 299, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone SE 2nd Gen', 449, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone XS Max', 1099, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 12 mini', 699, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 11 Pro', 999, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 11 Pro Max', 1099, 'https://svgshare.com/i/ukX.svg'),
    ('Apple', 'iPhone 12 Pro Max', 1199, 'https://svgshare.com/i/ukX.svg'),
    ('Samsung', 'Galaxy S21 Ultra', 1299, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S21 Plus', 999, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S21', 799, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy Note 20 Ultra', 1299, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy Note 20', 999, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S20 Ultra', 1199, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S20 Plus', 999, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S20 FE', 699, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy A71', 499, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy A52', 399, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S10', 899, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S10 Plus', 999, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S10e', 749, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy Note 10', 949, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy Note 10 Plus', 1049, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S9', 699, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy S9 Plus', 799, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy A50', 349, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy A20', 199, 'https://svgshare.com/i/umd.svg'),
    ('Samsung', 'Galaxy M51', 399, 'https://svgshare.com/i/umd.svg'),
    ('Sony', 'Xperia 1 III', 1299, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 5 III', 1099, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 10 III', 499, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 5 II', 899, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 1 II', 1099, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 10 II', 399, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 5', 799, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 1', 1099, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XZ3', 699, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XZ2', 599, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XZ1', 499, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XZ1 Compact', 399, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia 10', 349, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia L4', 249, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XA2', 299, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XA2 Ultra', 399, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XZ Premium', 599, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia XZs', 499, 'https://svgshare.com/i/ukv.svg'),
    ('Sony', 'Xperia L3', 199, 'https://svgshare.com/i/ukv.svg'),
    ('LG', 'Xperia L3', 199, 'https://svgshare.com/i/ujP.svg'),
    ('HUAWEI', 'Xperia L3', 199, 'https://svgshare.com/i/umq.svg'),
    ('BLACKBERRY', 'Xperia L3', 199, 'https://svgshare.com/i/um9.svg'),
    ('Sony', 'Xperia XA1', 249, 'https://svgshare.com/i/ukv.svg');
