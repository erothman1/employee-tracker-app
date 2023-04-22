-- SELECT role.title AS `Job Title`, role.salary AS `Salary`, role.id AS `Role ID`, department.name AS `Department`
-- FROM role 
-- LEFT JOIN department 
-- ON role.department_id = department.id
-- ORDER BY department.name;

-- SELECT employees.id AS `Employee ID`, employees.first_name AS `First Name`, employees.last_name AS `Last Name`, role.title AS `Job Title`, department.name AS `Department`, role.salary AS `Salary`, employees.manager_id AS `Manager ID`
-- FROM employees
-- LEFT JOIN role
-- ON employees.role_id = role.id
-- LEFT JOIN department
-- ON role.department_id = department.id;

-- INSERT INTO department (name)
-- VALUES 
--     ("Human Resources");

SELECT ${department}
FROM department
RIGHT JOIN role
ON department.id = role.department_id

INSERT INTO role (title, salary, department_id)
VALUES
    ("${roleName}", "${salary}", "id")