var seuNome = prompt('Qual o seu nome ?')
var suaIdade = parseInt(prompt('Qual a sua idade ?'))
var suaAltura = parseFloat(prompt('Qual sua altura ?'))
var seuPeso = parseInt(prompt('Qual o seu peso ?'))

var anoNas = 2023 - suaIdade
var Imc = seuPeso / (suaAltura * suaAltura)

alert('Olá ' + seuNome +', voce tem ' + suaIdade + ' anos e nasceu em ' + anoNas + ', tem ' + suaAltura + ' e pesa ' + seuPeso + ' Kg, seu IMC é de ' + Imc + ' Kg/m²')
