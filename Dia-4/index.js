let idade = Number(prompt('Insira a sua idade'))
let nome = prompt('Qual o seu nome ?')
if(idade === 16 && nome === "Bruno"){
    console.log('Você tem 16 anos e seu nome é Bruno')
}else if(idade === 16 || nome === "Bruno"){
    console.log('Ou voce tem 16 anos ou se chama bruno')
}else{
    console.log('Você não tem 16 anos e não se chama bruno')
}

