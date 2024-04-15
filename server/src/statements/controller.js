const conn = require("../../db");
const queries = require("./queries");

const getStatements = (req, res) => {
  conn.query(queries.getStatements, (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
};

const addStatement = (req, res) => {
  const { car_number, description } = req.body;

  conn.query(queries.checkCarNumberExists, [car_number], (error, results) => {
    if (results && results.length > 0) {
      res.status(400).json({
        message: "Такой регистрационный номер уже использовался в ваших заявках ранее! Укажите все в одном заявлении.",
      });
    } else {
      conn.query(queries.addStatement, [car_number, description], (error, result) => {
        if (error) throw error;
        res.status(201).json({
          message: "Заявление успешно создано.",
        });
      });
    }
  });
};

module.exports = {
  getStatements,
  addStatement,
};
