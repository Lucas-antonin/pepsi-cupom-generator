const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const registers = new Schema({
    nome:{
         type: String,
         required: true
    },
    cpf:{
       type: String,
        required: true,
        unique: true
    },
    cupom:{
        type: Number,
        required: true,
        unique: true
    }
})
registers.plugin(uniqueValidator)
mongoose.model("registers", registers)