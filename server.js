const inquirer = require('inquirer')
const mysql = require('mysql2')


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "password"
  database: 'employees_db'
});