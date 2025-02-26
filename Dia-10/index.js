const array = [];
const indices = [];
let contadoeIndice = 0

const numeroProcurado = parseInt(prompt("Digite um número a ser procurado:"));

for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`))
    array[1] = elemento;
}

for (let i = 0; i < 10; i++){
    if (array[1] === numeroProcurado){
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos indices ${indices}`);