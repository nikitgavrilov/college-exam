const express = require("express");
const cors = require("cors");
const statementsRoutes = require("./src/statements/routes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/statements", statementsRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
