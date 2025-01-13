const nome = prompt('Qual o seu nome?')
const idade = prompt('Quantos anos tem ?')
const carta = prompt('Já possui carteira de motorista ? (sim / não)')
const carro = prompt('Você possúi um carro ?')

if( idade < 18 || carta === 'nao' ){
    console.log(nome + ', você não pode dirigir')
}else if(idade > 18 && carta === 'sim' && carro === 'sim' ){
    console.log(nome + ', você será o motorista')
}else{
    console.log(nome + ', você pode dirigir mas não tem um carro')
}