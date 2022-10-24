var mysql = require("mysql2");

export const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "biblioteca",
  port: 3306

});

