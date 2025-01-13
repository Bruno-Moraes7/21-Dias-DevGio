let valor 
let quantidade 
let opcao = prompt('Olá, selecione a opção desejada:' + '\n1 = Gasolina; \n2 = Álcool; \n3 = Calibrar')
switch(opcao){
    case "1":
        valor = parseInt(prompt("Digíte aqui o valor que irá usar"))
        quantidade = valor / 5
        console.log('Você abasteceu ' + quantidade + 'L de gasolina')
        break;
    case "2":
        valor = parseInt(prompt("Digíte aqui o valor que irá usar"))
        quantidade = valor / 3
        console.log('Você abasteceu ' + quantidade + 'L de Álcool')
        break;
    default:
        console.log('Pneus calibrados com sucesso')
        break;
}