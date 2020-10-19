const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
require("../models/Register")
const register = mongoose.model("registers")
const controller = require("../controller")


router.get("/",(req,res)=>{
    res.render("../views/index.handlebars")
})

//router.get("/sorteio/:id", controller.cupomsearch)


router.post("/register",controller.register)

module.exports = router;