//1- somar os valores do array

let numeros = [1, 2, 3, 4, 5]; // nosso array
let soma = 0; // começa zerado

for (let i = 0; i < numeros.length; i++) { // percorre o array inteiro
    soma = soma + numeros[i]; // soma cada elemento
}

console.log("Soma total: " + soma); // exibe a soma

//2 – Encontrar o maior número em um array

let numeros1 = [10, 25, 8, 56, 32];

let maior = numeros1[0];

for (let index = 1; index < numeros1.length; index++) {
    if (numeros1[index] > maior) {
        maior = numeros1[index];
    }
}

console.log("Maior número: " + maior);

//3 – Contar quantos números pares existem no array

let num = [2, 7, 8, 13, 20, 25];
let pares = 0;

for (let index = 0; index < num.length; index++) {
   if (num[index] % 2 === 0) {
    pares++;
   }
}

console.log("Quantidade de pares: " + pares);

//4 – Imprimir todos os nomes de um array

let nomes = ["Ana", "Carlos", "Beatriz", "Joao"];

for (let index = 0; index < nomes.length; index++) {
    console.log("Nome " + (index + 1) + ": " + nomes[index]);

     array[index];
}

//5 – Inverter a ordem de um array

let numeros2 = [1, 2, 3, , 4, 5];
let invertido = []

for (let i = numeros1.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
}

console.log("Array original: " + numeros2);
console.log("Array invertido: " + invertido);