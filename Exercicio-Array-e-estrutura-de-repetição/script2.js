//Exercicios medios

//1 — Média de números

//let numeros = [10, 5, 8, 12, 7]
let soma = 0;

for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index];
}

let media = soma / numeros.length;
    console.log("Média:", media);

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > media) {
        console.log(numeros[index], "é maior que a média");   
    }
}

//2 - inverter array

let nomes = ["Ana", "Carlos", "Beatriz", "João"];
let invertido = [];

for (let index = nomes.length - 1; index >= 0; index--) {
    invertido.push(nomes[index]);
}
    console.log(invertido.join(", "));

//3 — Contagem de números pares e ímpares

//let numeros = [2, 5, 8, 11, 14];
let pares = 0;
let impares = 0;

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Pares:", pares);
console.log("impares:", impares);


//4 — Remover números negativos

let numero = [3, -2, 7, -5, 10];
let positivos = [];

for (let index = 0; index < numero.length; index++) {
    if (numero[index] >= 0) {
        positivos.push(numero[index])
    }
}

console.log(positivos);

//5 — Encontrar o maior número e sua posição

let numeros = [4, 9, 1, 12, 7];
let maior = numeros[0];
let posicao = 0;

for (let index = 1; index < numeros.length; index++) {
    if (numeros[index] > maior) {
        maior = numeros[index];
        posicao = index
    }   
}

console.log("Maior número:", maior, "na posição", posicao);
