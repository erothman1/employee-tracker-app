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
        console.log(response)
        switch(response.action) {
            case ("View all departments"):
                //call db.query prepared statement to view all departments
                console.log("View all departments")
            case ("View all roles"):
                //call db.query prepared statement to view all roles
                console.log("View all roles")
            case ("View all employees"):
                //call db.query prepared statement to view all employees
                console.log("View all employees")
            case ("Add a department"):
                //call db.query prepared statement to add a department
                console.log("Add a department")
            case ("Add a role"):
                //call db.query prepared statement to add a role
                console.log("Add a role")
            case ("Add an employee"):
                //call db.query prepared statement to add an employee
                console.log("Add an employee")
            case ("Update an employee"):
                //call db.query prepared statement to update an employee
                console.log("Update an employee")
            default: 
                console.log("Oops error")
        }
    })