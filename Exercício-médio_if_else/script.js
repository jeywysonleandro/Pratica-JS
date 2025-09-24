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