let fome = prompt('Você está com fome ?')
let dinheiro = prompt('Você tem dinehiro ?')
let restaurante = prompt('Seu restaurante favorito está aberto hoje ?')

if(fome === 'não' || dinheiro === 'não' || restaurante === 'não'){
    console.log('Hoje a janta será em casa')
}else if(dinheiro === 'sim' && restaurante === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido')
}else{
    console.log('Peça um delivery')
}
