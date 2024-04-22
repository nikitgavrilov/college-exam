const addUser = "INSERT INTO users (`login`,`password`,`fullname`,`tel`,`email`) VALUES (?)";
const loginUser = "SELECT * FROM users WHERE login = ?";

module.exports = {
  addUser,
  loginUser,
};
