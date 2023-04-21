DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

SELECT DATABASE();

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
)