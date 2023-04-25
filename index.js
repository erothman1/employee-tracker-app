const inquirer = require("inquirer")
const mysql = require("mysql2")
const table = require("console.table")
const { allDepartments, allRoles, allEmployees, addDepartment, addRole, addEmployee, updateEmployee } = require("./queries")

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

const art = () => {
    console.log(`
    ███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗  
    ██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝  
    █████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░  
    ██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░  
    ███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗  
    ╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝  
    
    ████████╗██████╗░░█████╗░░█████╗░██╗░░██╗███████╗██████╗░
    ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗
    ░░░██║░░░██████╔╝███████║██║░░╚═╝█████═╝░█████╗░░██████╔╝
    ░░░██║░░░██╔══██╗██╔══██║██║░░██╗██╔═██╗░██╔══╝░░██╔══██╗
    ░░░██║░░░██║░░██║██║░░██║╚█████╔╝██║░╚██╗███████╗██║░░██║
    ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝`)
}

const init = () => {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee", "Exit"]
        }
    ])
    .then((response) => {
        const {action} = response
        switch(action) {
            case ("View all departments"):
                allDepartments()
                setTimeout(init, 1000)
                break
            case ("View all roles"):
                allRoles()
                setTimeout(init, 1000)
                break
            case ("View all employees"):
                allEmployees()
                setTimeout(init, 1000)
                break
            case ("Add a department"):
                addDepartment()
                setTimeout(init, 8000)
                break
            case ("Add a role"):
                addRole()
                setTimeout(init, 15000)
                break
            case ("Add an employee"):
                addEmployee()
                setTimeout(init, 15000)
                break
            case ("Update an employee"):
                updateEmployee()
                setTimeout(init, 8000)
                break
            default: 
                return
        }
    })
}

art()
init()

