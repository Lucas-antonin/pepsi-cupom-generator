const mongoose = require("mongoose");
const register = mongoose.model("registers")
const TestaCPF = require("./public/js/cpfTest")
const randomC = require("./public/js/randomCupom")

module.exports = {

register: async(req,res,next)=>{
try{
    var erros = []
    var strCPF = req.body.cpf


    if (TestaCPF(strCPF) == false) {
        erros.push({texto: "Cpf invalido"})
    }


    if (req.body.nome.length < 3) {
        erros.push({texto: "Nome invalido!!"})
    }

    if (erros.length > 0) {
        res.render("../views/index.handlebars", {erros:erros})
    } else {

        const newRegister = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            cupom: randomC()
        }

        new register(newRegister).save().then(() => {
            req.flash("success_msg", "Record saved successfully!")
            register.findOne({cpf: req.body.cpf}).lean().then((registro)=>{
                res.render("../views/cupomPage.handlebars", {registro: registro})
            }).catch((err)=>{
                req.flash("error_msg","error when loading the coupon")
                res.redirect("/cadastro")
            })
        }).catch((err) => {
            req.flash("error_msg", "There was an error saving the record!")
        })



    }
}catch (e){
    next(e)
}
}



}