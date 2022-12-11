SELECT name FROM students;
SELECT* FROM students WHERE age>30;
SELECT * FROM students WHERE Age>30 AND Gender='F';
SELECT   Points  Alex FROM students;
 INSERT INTO students(ID, Name, Age, Gender, Points) VALUES (20, 'Amira', 34, 'F', 300);
 UPDATE students SET Points = 350 WHERE name = 'basma';
 UPDATE students SET Points = 150 WHERE name = 'Alex';
 
 
 
  10 - CREATE TABLE graduates (
ID INT NOT NULL PRIMARY KEY,
Name TEXT NOT NULL UNIQUE,
Age INT,
Gender TEXT,
Points INT,
Graduation TEXT
);


  11- INSERT INTO graduates (ID, Name, Age, Gender, Points)
      SELECT * FROM students
      WHERE name='Layla';
      
  12- UPDATE graduates
    SET Graduation='08/09/2018'
    WHERE Name='Layal';
    
  13- DELETE FROM students WHERE Name='Layal';
       


