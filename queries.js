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
            throw err
        }
        console.table(result)
    })
}

//To view all roles
const allRoles = () => {
    db.query("SELECT role.title AS `Job Title`, role.salary AS `Salary`, role.id AS `Role ID`, department.name AS `Department` FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY department.name;", (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
    })
}

//To view all employees
//TODO: wrong manager is showing up
const allEmployees = () => {
    db.query("SELECT employees.id AS `Employee ID`, employees.first_name AS `First Name`, employees.last_name AS `Last Name`, role.title AS `Job Title`, department.name AS `Department`, role.salary AS `Salary`, CONCAT(manager.first_name, ' ', manager.last_name) AS `Manager` FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employees manager ON manager.id = employees.manager_id;", (err, result) => {
        if (err) {
            throw err
        }
        console.table(result)
    })
}

//To add a department
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

            db.query(`INSERT INTO department (name)
            VALUES 
                ("${newDepartment}");`, (err, result) => {
                if (err) {
                    throw err
                }
                console.log(`Successfully added ${newDepartment}!`)
            })

        })
}

//To add a role
//TODO: get list of departments to choose from 
const addRole = () => {

    const depArr = () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    const resultArr = result.map(department => `${department.name}`)
                    resolve(resultArr)
                }
            })
        })
    }

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the role name?",
                name: "roleName"
            },
            {
                type: "input",
                message: "What is the role's salary?",
                name: "salary"
            },
            {
                type: "rawlist",
                message: "What department is this role in?",
                name: "department",
                choices: async () => await depArr()
            }
        ])
        .then((response) => {
            const { roleName, salary, department } = response

            db.query(`SELECT id FROM department WHERE name = ?`, [department], (err, result) => {
                if (err) {
                    throw err
                }

                const departmentId = result[0].id

                db.query(`INSERT INTO role (title, salary, department_id) VALUE (?, ?, ?)`, [roleName, salary, departmentId], (err, result) => {
                    if (err) {
                        throw err
                    }
                    console.log(`Successfully added ${roleName}!`)
                })
            })

        })

}

// inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "What is the role name?",
//             name: "roleName"
//         },
//         {
//             type: "input",
//             message: "What is the role's salary?",
//             name: "salary"
//         },
//         {
//             type: "input",
//             message: "What department is this role in?",
//             name: "department",
//         }
//     ])
//     .then((response) => {
//         const { roleName, salary, department } = response

//         db.query(`SELECT id FROM department WHERE name = ?`, [department], (err, result) => {
//             if (err) {
//                 throw err
//             }

//             const departmentId = result[0].id 

//             db.query(`INSERT INTO role (title, salary, department_id) VALUE (?, ?, ?)`, [roleName, salary, departmentId], (err, result) => {
//                 if (err) {
//                     throw err
//                 }
//                 console.log(`Successfully added ${roleName}!`)
//             })
//         })

//     })


//Add employee
//TODO: make it so manager name comes up instead of null
//TODO: get list of roles to choose from
const addEmployee = () => {
    db.query(`SELECT * FROM role`, (err, result) => {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's first name?",
                    name: "firstName"
                },
                {
                    type: "input",
                    message: "What is the employee's last name?",
                    name: "lastName"
                },
                {
                    type: "input",
                    message: "What is the employee's role?",
                    name: "role",
                    choices: result.map(role => `${role.title}`)
                },
                {
                    type: "input",
                    message: "Who is the employee's manager?",
                    name: "manager"
                }
            ])
            .then((response) => {
                const { firstName, lastName, role, manager } = response

                db.query(`SELECT id FROM role WHERE title = ?`, [role], (err, result) => {

                    const roleId = result[0].id

                    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)`, [firstName, lastName, roleId, null], (err, result) => {
                        if (err) {
                            throw err
                        }
                        console.log(`Successfully added ${firstName} ${lastName}!`)
                    })
                })
            })
    })
    // inquirer
    //     .prompt([
    //         {
    //             type: "input",
    //             message: "What is the employee's first name?",
    //             name: "firstName"
    //         },
    //         {
    //             type: "input",
    //             message: "What is the employee's last name?",
    //             name: "lastName"
    //         },
    //         {
    //             type: "input",
    //             message: "What is the employee's role?",
    //             name: "role"
    //         },
    //         {
    //             type: "input",
    //             message: "Who is the employee's manager?",
    //             name: "manager"
    //         }
    //     ])
    //     .then((response) => {
    //         const { firstName, lastName, role, manager } = response

    //         db.query(`SELECT id FROM role WHERE title = ?`, [role], (err, result) => {

    //             const roleId = result[0].id

    //             db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)`, [firstName, lastName, roleId, null], (err, result) => {
    //                 if (err) {
    //                     throw err
    //                 }
    //                 console.log(`Successfully added ${firstName} ${lastName}!`)
    //             })
    //         })
    //     })
}

//TODO: update employee role by selecting new employee from list of employee and then selecting role from list of roles
const updateEmployee = () => {
    // inquirer
    //     .prompt([
    //         {
    //             type: "list",
    //             message:
    //         }
    //     ])
}

module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
}


