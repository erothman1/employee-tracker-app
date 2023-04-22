const inquire = require("inquirer")
const mysql = require("mysql2")

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Nacholover123!',
      database: 'company_db' 
    },
    console.log(`Connected to the company_db database.`)
   )
   