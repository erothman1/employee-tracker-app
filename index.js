const inquirer = require("inquirer")
const mysql = require("mysql2")
const table = require("console.table")
const { allDepartments, allRoles, allEmployees, addDepartment } = require("./server")

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
                console.log("View all departments")
                break
            case ("View all roles"):
                allRoles()
                console.log("View all roles")
                break
            case ("View all employees"):
                allEmployees()
                console.log("View all employees")
                break
            case ("Add a department"):
                addDepartment()
                console.log("Add a department")
                break
            case ("Add a role"):
                //call db.query prepared statement to add a role
                console.log("Add a role")
                break
            case ("Add an employee"):
                //call db.query prepared statement to add an employee
                console.log("Add an employee")
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

