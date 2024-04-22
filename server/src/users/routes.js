const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.post("/reg", controller.addUser);
router.post("/login", controller.loginUser);
router.get("/logout", controller.logoutUser);
router.get("/", controller.verifyUser, controller.user);

module.exports = router;
