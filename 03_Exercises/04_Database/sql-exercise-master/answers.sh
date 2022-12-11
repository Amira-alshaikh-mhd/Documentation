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
  
  
  14- CREATE TABLE Employee1 (
	ID	INTEGER NOT NULL,
	EmployeeName	TEXT NOT NULL UNIQUE,
	CompanyoftheEemployee	TEXT,
	CompanyDate	TEXT
     );
     
     INSERT INTO Employee1(ID, EmployeeName, CompanyoftheEemployee)
SELECT ID, Name, Company
FROM employees;


  15-SELECT employees.Name FROM companies, employees WHERE employees.Company = companies.Name AND companies.date < 2000;
  
  16-SELECT companies.Name FROM employees, companies WHERE employees.Company = companies.Name AND employees.Role='Graphic Designer';
  
  18-SELECT Name,MAX(Points) 
    FROM students;
    
  19-  SELECT AVG(Points)
    FROM students;
    
    
    
    
  20- SELECT COUNT(Name)
    FROM students
    WHERE Points='500';
    
    
  21-SELECT * FROM students
   WHERE Name LIKE '%s%';
   
   
  22-SELECT (Name) FROM students
   ORDER BY Points DESC; 
   
   
   


       


