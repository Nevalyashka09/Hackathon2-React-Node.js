const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);

module.exports = router;
