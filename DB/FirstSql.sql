 show databases;
  create database Movies_Database;
  show databases;
use movies_database;

 create table movies (
     Name varchar(100),
     Rating integer);
     
show tables;
      
insert into movies (name, rating) values("avengers infinty war ",5);
insert into movies (name, rating) values("avengers end war",5);

 select name from movies;
 select * from movies;
 select name,rating from movies;

      