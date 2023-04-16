const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//==============================USER APIS======================================

router.post("/register", userController.regiserUser);
router.post("/login", userController.login);
router.get("/user", userController.getUser);
router.post("/data", userController.registeredForm);


module.exports = router;
