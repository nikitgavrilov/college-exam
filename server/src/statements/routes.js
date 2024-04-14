const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStatements);
router.post("/", controller.addStatement);

module.exports = router;
