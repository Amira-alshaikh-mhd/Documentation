SELECT name FROM students;
SELECT* FROM students WHERE age>30;
SELECT * FROM students WHERE Age>30 AND Gender='F';
SELECT   Points  Alex FROM students;
 INSERT INTO students(ID, Name, Age, Gender, Points) VALUES (20, 'Amira', 34, 'F', 300);
 UPDATE students SET Points = 350 WHERE name = 'basma';
 UPDATE students SET Points = 150 WHERE name = 'Alex';
