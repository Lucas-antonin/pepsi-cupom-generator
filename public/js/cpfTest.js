module.exports = function TestaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    // verificando se tem a quantidade certa de caracter e se não tem todos caracteres iguais
    if(cpf.length !== 11 || /^(\d)\1+$/.test(cpf))
        return false;
    let soma = 0,
        resto;
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if((resto == 10) || (resto == 11))
        resto = 0;
    if(resto != parseInt(cpf.substring(9, 10)) )
        return false;
    soma = 0;
    for(var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if((resto == 10) || (resto == 11))
        resto = 0;
    if(resto != parseInt(cpf.substring(10, 11) ) )
        return false;
    return true;
}

