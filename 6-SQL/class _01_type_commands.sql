-- DDL
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    age NUMERIC
);

DROP TABLE students;

-- DML
INSERT INTO students (name, cpf, age, city) VALUES 
    ("Wellington", "123.123.123-01", 20, "Jucás"), 
    ("Emanuel", "123.123.123-02", 19, "Iguatu"),
    

UPDATE students SET age = 20 WHERE name = "Wellington";
UPDATE students SET age = 19 WHERE id = 2;
UPDATE students SET name = "Wellington" WHERE id = 2;

DELETE FROM students;
DELETE FROM students WHERE id = 3; 

--DQL
SELECT * FROM students;

SELECT name, age
FROM students
WHERE id = 4;

SELECT name 
FROM students 
WHERE id = 3;

SELECT * 
FROM students 
WHERE id >=3;

SELECT * 
FROM students 
WHERE id >=2 AND id <=4;

SELECT * 
FROM students 
WHERE id = 2 OR id = 6;

SELECT * 
FROM students 
WHERE age > 19 
ORDER BY age DESC;

SELECT * FROM students;

-- DDL
ALTER TABLE students
ADD COLUMN city TEXT
NOT NULL DEFAULT "Jucás";


UPDATE students SET city = "Jucás";
UPDATE students SET city = "Saboeiro" WHERE id = 1;


ALTER TABLE students
DROP COLUMN city;

ALTER TABLE students
RENAME COLUMN city TO test;