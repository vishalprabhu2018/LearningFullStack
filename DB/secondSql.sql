
-- \! cls  (clear screen)

SHOW DATABASES;
CREATE DATABASE MOVIES_DB_PW;
 
SHOW DATABASES;
USE MOVIES_DB_PW;

CREATE TABLE Actors (Firstname VARCHAR(20), Lastname VARCHAR(20), Gender VARCHAR(10), Networth INTEGER);
  
INSERT INTO Actors (Firstname, Lastname, Gender, Networth) VALUES ("Johnny", "Depp", "Male", 200);
INSERT INTO Actors (Firstname, Lastname, Gender, Networth) VALUES ("Chris", "Hemsworth", "Male", 400);
INSERT INTO Actors (Firstname, Lastname, Gender, Networth) VALUES ("Scarlett", "Johnson", "Female", 500), ("Chris", "Evans", "Male", 700), ("Paul", "Rudd", "Male", 150), ("Brie", "Larson", "Female", 650);
  
  
SELECT * FROM Actors;
SELECT * FROM ACTORS WHERE Networth >= 500;
SELECT * FROM ACTORS WHERE Networth >= 500 OR Networth < 200;
SELECT * FROM ACTORS WHERE Gender = "Female";
SELECT Firstname, Networth FROM ACTORS WHERE Gender = "Female";
select * from actors;
INSERT INTO Actors (Firstname, Lastname, Gender, Networth) VALUES ("Chadwick", "Boseman", "Male", 400);
   
select * from actors;
SELECT * FROM ACTORS WHERE FIRSTNAME = "Chris";
SELECT * FROM ACTORS WHERE FIRSTNAME like "Ch%";
SELECT * FROM ACTORS WHERE FIRSTNAME like "%is";
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%";
SELECT * FROM ACTORS WHERE FIRSTNAME like "%a%";
 
SELECT * FROM ACTORS;
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%";
SELECT * FROM ACTORS ORDER BY Networth ASC;
SELECT * FROM ACTORS ORDER BY Networth DESC;


SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%";
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" ORDER BY Networth DESC;
 SELECT * FROM ACTORS ORDER BY Networth;
 
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" ORDER BY Firstname;
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" ORDER BY Firstname;
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" ORDER BY Firstname, Networth DESC;

SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" ORDER BY Firstname;
SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" ORDER BY Firstname, Networth DESC;

select * from actors;
select * from actors limit 3;
select * from actors limit 2;
select * from actors limit 3 offset 0;
select * from actors limit 3;
select * from actors limit 3 offset 2;
select * from actors limit 3 offset 0;
select * from actors limit 3 offset 3;
select * from actors limit 3 offset 6;
      
      select * from actors;
       select * from actors limit 3 offset 2;
       select * from actors limit 3 offset 3;
        select * from actors limit 3 offset 5;
 select * from actors limit 3 offset 15;
  select * from actors limit 3 offset 0;
   select * from actors limit 3 offset 0;
    select * from actors limit 3 offset 6;
    
    SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%";
 SELECT * FROM ACTORS WHERE FIRSTNAME like "CH%" limit 2;
 select * from actors;
 
 UPDATE Actors SET Networth = 500 WHERE Firstname = "Chadwick";
  select * from actors;
