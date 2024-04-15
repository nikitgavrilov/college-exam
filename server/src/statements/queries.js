const getStatements = "SELECT * FROM statements";
const checkCarNumberExists = "SELECT * FROM statements s WHERE s.car_number = ?";
const addStatement = "INSERT INTO statements (car_number, description) VALUES (?, ?)";
const updateStatus = "UPDATE statements SET status = ? WHERE id = ?";

module.exports = {
  getStatements,
  checkCarNumberExists,
  addStatement,
  updateStatus,
};
