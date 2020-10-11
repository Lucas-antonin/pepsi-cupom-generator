const express = require("express");
const router = express.Router();
require("../models/Register")
const controller = require("../controller")


router.get("/",(req,res)=>{
    res.render("../app/views/index.ejs")
})

router.get("/sorteio", (req,res)=>{
    res.render("../app/views/cupomPage.ejs")
})

router.post("/register",controller.register)

module.exports = router;