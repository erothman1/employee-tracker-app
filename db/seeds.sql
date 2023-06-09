INSERT INTO department (name)
VALUES 
    ("Software Engineering"), 
    ("Marketing"), 
    ("Finance"), 
    ("Sales"), 
    ("Legal"); 

INSERT INTO role (title, salary, department_id)
VALUES
    ("Software Engineer", 105, 1), 
    ("Lead Engineer", 150, 1), 
    ("Social Media Manager", 75, 2), 
    ("Marketing Lead", 95, 2), 
    ("Financial Analyst", 100, 3), 
    ("Lead Account Manager", 120, 3), 
    ("Sales Representative", 65, 4), 
    ("Head Sales Associate", 90, 4), 
    ("Legal Assistant", 60, 5), 
    ("Head of Legal Operations", 125, 5); 

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Sarah", "Sunders", 2, null), 
    ("Bobby", "Anderson", 1, 1),
    ("Johnny", "Jackson", 1, 1),
    ("Paige", "Peters", 4, null), 
    ("Pete", "Keller", 3, 4),
    ("Kate", "Waters", 6, null), 
    ("Ainsley", "Schwartz", 5, 6),
    ("Brooke", "Dreem", 5, 6),
    ("Dwight", "Powers", 8, null), 
    ("James", "White", 7, 9),
    ("Lauren", "Steinberg", 10, null), 
    ("Emma", "Banders", 9, 11)
   