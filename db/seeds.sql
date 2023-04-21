INSERT INTO department (name)
VALUES 
    ("Software Engineering"), --1
    ("Marketing"), --2
    ("Finance"), --3
    ("Sales"), --4
    ("Legal"); --5

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