const inquirer = require("inquirer")
const mysql = require("mysql2")
const table = require("console.table")
const { allDepartments, allRoles, allEmployees, addDepartment, addRole, addEmployee } = require("./server")

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
   
inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee"]
        }
    ])
    .then((response) => {
        const {action} = response
        switch(action) {
            case ("View all departments"):
                allDepartments()
                break
            case ("View all roles"):
                allRoles()
                break
            case ("View all employees"):
                allEmployees()
                break
            case ("Add a department"):
                addDepartment()
                break
            case ("Add a role"):
                addRole()
                break
            case ("Add an employee"):
                addEmployee()
                break
            case ("Update an employee"):
                //call db.query prepared statement to update an employee
                console.log("Update an employee")
                break
            default: 
                console.log("Oops error")
                break
        }
    })

