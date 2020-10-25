const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
require("../models/Register")
const register = mongoose.model("registers")
const controller = require("../controller")

router.get("/",controller.winner)

router.post("/register",controller.register)

module.exports = router;