const conn = require("../../db");
const queries = require("./queries");

const getStatements = (req, res) => {
  conn.query(queries.getStatements, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const addStatement = (req, res) => {
  const { car_number, description } = req.body;

  conn.query(queries.checkCarNumberExists, [car_number], (error, results) => {
    if (results && results.length > 0) {
      res.send("Такой регистрационный номер уже использовался в ваших заявках ранее! Укажите все в одном заявлении.");
    }
  });

  conn.query(queries.addStatement, [car_number, description], (error, result) => {
    if (error) throw error;
    res.send("Заявление создано успешно!");
  });
};

module.exports = {
  getStatements,
  addStatement,
};
