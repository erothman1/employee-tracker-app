INSERT INTO department (name)
VALUES 
    ("Software Engineering"), --1
    ("Marketing"), --2
    ("Finance"), --3
    ("Sales"), --4
    ("Legal"); --5

INSERT INTO role (title, salary, department_id)
VALUES
    ("Software Engineer", 105, 1), --1
    ("Lead Engineer", 150, 1), --2
    ("Social Media Manager", 75, 2), --3
    ("Marketing Lead", 95, 2), --4
    ("Financial Analyst", 100, 3), --5
    ("Lead Account Manager", 120, 3), --6
    ("Sales Representative", 65, 4), --7
    ("Head Sales Associate", 90, 4), --8
    ("Legal Assistant", 60, 5), --9
    ("Head of Legal Operations", 125, 5); --10

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Bobby", "Anderson", 1),
    ("Johnny", "Jackson", 1),
    ("Sarah", "Sunders", 2, 1), --manager
    ("Pete", "Keller", 3),
    ("Paige", "Peters", 4, 2), --manager
    ("Ainsley", "Schwartz", 5),
    ("Brooke", "Dreem", 5),
    ("Kate", "Waters", 6, 3), --manager
    ("James", "White", 7),
    ("Dwight", "Powers", 8, 4), --manager
    ("Emma", "Banders", 9),
    ("Lauren", "Steinberg", 10, 5) --manager