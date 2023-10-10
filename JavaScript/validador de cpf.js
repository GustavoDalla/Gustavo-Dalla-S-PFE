/*var num = prompt("Informe um número: ")
var dobro = num*2
console.log(`O dobro do seu número é: ${dobro}`) ATV1*/ 

/*var num = prompt("Informe um número: ")
var post = num+1
var ant = num-1
console.log(`O número posterior informado: ${post}, número anterior informado: ${ant}`) ATV2*/

//CÓDIGO VERIFICADOR DE CPF

function validacpf(cpf){
    cpf = cpf.replace(/[^\d]+/g,'') //Troca os caracteres por nada = '' Pesquisar(RegExp)

    if(cpf === '' || cpf.length !== 11 || /^\d{11}$/.test(cpf) === false){
        return false
    }

    //Verifica se todos os digitos são iguais, o cpf é invalido
    if(/^(\d)\1+$/.test(cpf)){
        return false
    }

    let a = 0
    for(let i = 0; i < 9; i++){
        a += parseInt(cpf.charAt(i) * (10 - i))

        //a*10 + b*9 + c*8 + d*7 + e*6...
    }
    let re = 11 - (a % 11)
    if(re === 10 || re === 11){
        re = 0
    }
    if(re !== parseInt(cpf.charAt(9))){
        return false  
    }

    a = 0;
    for(let i = 0; i < 10; i++){
        a += parseInt(cpf.charAt(i) * (11 - i))
    }

    //a*11 + b*10 + c*9 + d*8 + e*7...
    re = 11 - (a % 11)
    if(re === 10 || re === 11){
        re = 0
    }
    if(re !== parseInt(cpf.charAt(10))){
        return false  
    }

    return true
}

let cpf = "123.456.789-09"
if(validacpf(cpf)){
    console.log("CPF válido.")
}else{
    console.log("CPF inválido")
}