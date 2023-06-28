const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const smartphoneControllers = require("./controllers/smartphoneControllers");

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);

router.get("/smartphones", smartphoneControllers.getAllSmartphones);

module.exports = router;
