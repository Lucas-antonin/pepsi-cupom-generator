const mongoose = require("mongoose");
const register = mongoose.model("registers")


module.exports = function Winner() {
    register.findOneRandom((err, result)=> {
        if (!err) {
       var result = result
       return result
        }
    })
}