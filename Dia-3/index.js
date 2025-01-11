var seuNome = prompt('Qual o seu nome ?')
var suaIdade = Number.prompt('Qual a sua idade ?')
var suaAltura = parseFloat(prompt('Qual sua altura ?'))
var seuPeso = parseInt(prompt('Qual o seu peso ?'))

var anoNas = 2023 - suaIdade
var Imc = seuPeso / (suaAltura * suaAltura)

console.log('Olá ' + seuNome +', voce tem ' + suaIdade + ' e nasceu em ' + anoNas + ', tem ' + suaAltura + ' pesa ' + seuPeso + ' e seu IMC é de ' + Imc + ' Kg/m²')
