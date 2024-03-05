DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  cpf TEXT UNIQUE NOT NULL,
  street TEXT,
  neighborhood TEXT,
  city TEXT
);

DROP TABLE IF EXISTS phones;
CREATE TABLE IF NOT EXISTS phones (
  number TEXT NOT NULL,
  id_client INTEGER NOT NULL,
  PRIMARY KEY (number, id_client),
  FOREIGN KEY(id_client) REFERENCES clients(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,    
    description TEXT
);

DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_client INTEGER NOT NULL,
    id_product INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE
);

SELECT * FROM clients;
INSERT INTO clients(name, cpf) VALUES
    ("Odilon", "123.123.123-00"),
    ("Pedro", "123.123.123-01"),
    ("Éric", "123.123.123-02");

SELECT * FROM phones;
INSERT INTO phones(number, id_client) VALUES
    ("(88)91111-1111", "1"),
    ("(88)91111-1112", "2"),
    ("(88)91111-1113", "2"),
    ("(88)91111-1114", "3");
    
SELECT clients.name,phones.number
FROM clients
INNER JOIN phones
ON clients.id = phones.id_client
ORDER BY clients.name;

SELECT * FROM products;
INSERT INTO products(name, price) VALUES
    ("Fone Lenovo XT88", 120.99),
    ("Smart Watch", 110.30),
    ("Teclado K68", 210.50);

SELECT * FROM sales;
INSERT INTO sales (id_client, id_product, amount) VALUES
    (1, 1, 2),
    (2, 2, 3),
    (3, 1, 5),
    (1, 2, 3);
    

SELECT clients.name,
       products.name AS produto,
       sales.amount,
       sales.amount * products.price AS Total
       
FROM clients
INNER JOIN sales ON sales.id_client = clients.id
INNER JOIN products ON sales.id_product = products.id
ORDER BY clients.name;
