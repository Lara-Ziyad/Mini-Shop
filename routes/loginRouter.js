const express = require(`express`);
const router = express.Router();
const loginController = require("../controllers/loginController");

router.get("/", loginController.login);
router.post("/", loginController.validateUser);

module.exports = router;
