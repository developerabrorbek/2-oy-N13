-- \l -> barcha databaselarni ko'rish

-- \dt  -> barcha tablelarni ko'rish

-- CREATE DATABASE db_name;   -> databasa yaratish

-- \c db_name;  -> db_name nomli databasega ulanish


-- DDL (Data Definition Language)  -> amallari: CREATE, ALTER, DROP, TRUNCATE

-- jadval yaratish (CREATE)
CREATE TABLE cars_demo (
  id INTEGER PRIMARY KEY,
  brend VARCHAR(255),
  price INTEGER,
  is_sold BOOLEAN
);


-- jadvalni o'zgartirish (ALTER)

-- yangi ustun qo'shish
ALTER TABLE table_name ADD COLUMN is_sold BOOLEAN;

-- ustunni o'chirish
ALTER TABLE table_name DROP COLUMN is_sold;

-- ustunni turini o'zgartirish
ALTER TABLE table_name ALTER COLUMN is_sold TYPE TEXT;

-- jadvalni o'chirish (DROP)
DROP TABLE table_name;

-- jadval ma'lumotlarini o'chiradi(TRUNCATE)
TRUNCATE TABLE table_name;

-- DML (Data Manipulation Language) -> Ma'lumotlar Manipulyatsiya Tili. Amallari: SELECT,INSERT, UPDATE, DELETE

-- jadvalning barcha ma'lumotlarini ko'rish
SELECT * FROM table_name;  


-- jadvalning ma'lum ustunilarini ko'rish
SELECT brend,id FROM table_name;  


-- jadvalga ma'lumot qo'shish (ma'lum bir field'larga)
INSERT INTO cars_demo(id, brend, price) VALUES (1, 'BMW', 125100, true);

-- jadvalga ma'lumot qo'shish (barcha field'larga)
INSERT INTO cars_demo VALUES (1, 'BMW', 125100, true);

-- jadvalga bir nechta ma'lumot qo'shish 
INSERT INTO cars_demo(id, brend, price, is_sold)
  VALUES 
  (1, 'BMW', 125100, true),
  (2, 'BMW', 125100, true),
  (3, 'BMW', 125100, true),
  (4, 'Audi', 56000, false);

-- ma'lumotni update qilish (ustunning barcha elemtlarini)
UPDATE table_name
SET brend = 'Toyota';

-- ma'lumotni update qilish
UPDATE table_name
SET brend = 'Toyota'
WHERE id = 2;


-- ma'lumotni o'chirish (DELETE) -> barchasini
DELETE FROM cars_demo;

-- ma'lumotni shart bo'yicha o'chirish
DELETE FROM cars_demo WHERE id = 4;