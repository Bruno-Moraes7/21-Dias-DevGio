

let nome = prompt('Qual seu nome ?')
console.log('nome')
let cpf = prompt('Qual o seu CPF ?')
console.log('cpf')
let saque ;

let saldo = Number(prompt('Qual seu saldo ?'))
let escolha = prompt(' Você irá sacar ou depositar ?')

switch(escolha){
    case  "sacar" :
    let saque = Number(prompt('Qual será o valor a sacar?'))
    break;
    case "depositar" :
    let deposito = Number(prompt('Qual será o valor a ser depositado ?'))
}

let saldoTotal = saldo + saque
console.log("Seu saldo é " + saldoTotal + " Posso te ajudar em algo mais ?")