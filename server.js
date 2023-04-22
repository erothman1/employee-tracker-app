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
    db.query("SELECT * FROM department", (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

//To view all roles
const allRoles = () => {
    db.query("SELECT * FROM role", (err, result) => {
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


