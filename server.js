const inquirer = require("inquirer")
const mysql = require("mysql2")
const table = require("console.table")

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Nacholover123!",
        database: "company_db"
    },
    console.log(`Connected to the company_db database.`)
)

//To view all departments
const allDepartments = () => {
    db.query("SELECT name AS Department FROM department", (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

//To view all roles
const allRoles = () => {
    db.query("SELECT role.title AS `Job Title`, role.salary AS `Salary`, role.id AS `Role ID`, department.name AS `Department` FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY department.name;", (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

const allEmployees = () => {
    db.query("SELECT employees.id AS `Employee ID`, employees.first_name AS `First Name`, employees.last_name AS `Last Name`, role.title AS `Job Title`, department.name AS `Department`, role.salary AS `Salary`, employees.manager_id AS `Manager ID` FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id;", (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What department would you like to add?",
                name: "newDepartment"
            }
        ])
        .then((response) => {
            const { newDepartment } = response

            db.query(`INSERT INTO department (name) VALUES (${newDepartment});`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })

        })
}

module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
    addDepartment
}


