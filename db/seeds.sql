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
    ("Bobby", "Anderson", 1, null),
    ("Johnny", "Jackson", 1, null),
    ("Sarah", "Sunders", 2, 1), 
    ("Pete", "Keller", 3, null),
    ("Paige", "Peters", 4, 2), 
    ("Ainsley", "Schwartz", 5, null),
    ("Brooke", "Dreem", 5, null),
    ("Kate", "Waters", 6, 3), 
    ("James", "White", 7, null),
    ("Dwight", "Powers", 8, 4), 
    ("Emma", "Banders", 9, null),
    ("Lauren", "Steinberg", 10, 5) 