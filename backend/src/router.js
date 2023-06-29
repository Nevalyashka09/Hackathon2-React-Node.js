const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const smartphoneControllers = require("./controllers/smartphoneControllers");
const verifyPassword = require("./middlewares/verifyPassword");

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("login/", verifyPassword);

router.get("/smartphones", smartphoneControllers.getAllSmartphones);
router.get("/smartphones/brands", smartphoneControllers.getSmartphonesbyBrand);
router.get("/smartphones/models", smartphoneControllers.getSmartphonesbyModel);

module.exports = router;
