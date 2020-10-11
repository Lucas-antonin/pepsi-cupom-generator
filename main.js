const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const registerValidator = require("./rotes/registerValidator")
require("./models/Register")


//Static
app.use(express.static(__dirname + "/public"))

//Config bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Config mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/pepsi-cupom",{
    useMongoCliente: true
}).then(()=>{
    console.log("Connected with database")
}).catch((err)=>{
    console.log("Error when trying to connect to the MongoDB")
})


//Rotas
app.use("/cadastro", registerValidator);


app.listen(8081,()=>{
    console.log("Server have been opened")
})