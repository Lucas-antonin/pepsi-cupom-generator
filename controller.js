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
        erros.push("Cpf invalido")
    }


    if (req.body.nome.length < 3) {
        erros.push("Nome invalido!!")
    }

    if (erros.length > 0) {
        console.log("ERRO")
    } else {

        const newRegister = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            cupom: randomC()
        }
        new register(newRegister).save().then(() => {
            console.log("Registro salvo com sucesso")
        }).catch((err) => {
            console.log("Erro ao salvar o registro")
        })
        res.redirect("/cadastro/sorteio")
    }
}catch (e){
    next(e)
}
}
}