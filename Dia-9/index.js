let nome = prompt('Qual é o seu nome ?')
let idade = prompt('Qual é o sua idade ?')
let peso = prompt('Qual é o seu peso ?') 
let altura = parseInt(prompt('Qual a sua altura ?'))
let profissao = prompt('Qual a sua Profissão ?')

console.log('Usuário inseriu NOME: ' + nome + ' IDADE: ' + idade + ' PESO: ' + peso + ' ALTURA: ' + altura + ' PROFISSÃO: ' + profissao + ' . ')

alert('Olá ' + nome + ', você tem ' + idade + ' anos e é ' + profissao)

if(idade >= 18){
    alert('Você já pode tomar umas geladas , pois você tem ' + idade + ' anos, ')
    console.log('Idade maior que 18 anos.')
}else{
    alert('Infelizmente você não poderá tomar uma hoje')
    console.log('Idade menor de que 18 anos.')
}


let IMC = peso / (altura * altura) 


