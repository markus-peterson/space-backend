-- Script Database

CREATE DATABASE other

-- Select database

CREATE TABLE person (
    id INTEGER PRIMARY KEY, 
    name VARCHAR(64),
    pass VARCHAR(64)
)

INSERT INTO person(id, name, pass) 
VALUES(1, 'testUser1', 'test1'), (2, 'testUser2', 'test2')