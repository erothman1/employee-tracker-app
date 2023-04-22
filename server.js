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
    db.query("SELECT role.title AS Job Title, role.salary AS Salary, role.department_id AS Department FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY department.name;", (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

module.exports = {
    allDepartments,
    allRoles
}


