const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const statementsRoutes = require("./src/statements/routes");
const usersRoutes = require("./src/users/routes");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/statements", statementsRoutes);
app.use("/api/v1/users", usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
