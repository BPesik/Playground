
IF db_id('Playground') IS NULL 
    CREATE DATABASE Playground

GO

USE Playground

CREATE TABLE Todos (
    Id UNIQUEIDENTIFIER,
    Task varchar(255),
    Importance INTEGER,
    PRIMARY KEY(Id), 
);
