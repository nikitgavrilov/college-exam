const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "violations",
});

conn.connect((err) => {
  if (err) return err;
  return console.log("Connection to Database was success");
});

module.exports = conn;
