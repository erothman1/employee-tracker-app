SELECT role.title AS `Job Title`, role.salary AS `Salary`, department.name AS `Department`
FROM role 
LEFT JOIN department 
ON role.department_id = department.id
ORDER BY department.name;

