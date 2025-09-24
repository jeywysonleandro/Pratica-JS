//1. Classificação de notas

let nota = 51

if (nota < 40) {
    console.log("reprovado");
}

else if (nota >= 40 && nota <= 59) {
    console.log("recuperação");
}

else {
    console.log("aprovado");
}

//2. Calculadora simples

let num1 = 50;
let num2 = 20;

let operacao = "-"

if (operacao === "+") {
    console.log(num1 + num2);
}

else if (operacao === "-") {
    console.log(num1 - num2);
}

else if (operacao === "*") {
    console.log(num1 * num2);
}

else if (operacao === "/") {
    console.log(num1 / num2);
}

else {
    console.log("Operação inválida");
}

//3. Faixa etária

let idade = 20

if (idade >= 18) {
    console.log("Adulto");
}

else if (idade <= 13) {
    console.log("Criança");
}

else if (idade >=)