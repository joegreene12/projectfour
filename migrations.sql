CREATE DATABASE drakedb;

\c drakedb


CREATE TABLE users (id SERIAL PRIMARY KEY, user_name VARCHAR(255), user_email VARCHAR(255), password_salt VARCHAR(255), password_hash VARCHAR(255), is_admin BOOLEAN);


CREATE TABLE drakesongs (id SERIAL PRIMARY KEY, name VARCHAR(255), lyrics VARCHAR(255));
