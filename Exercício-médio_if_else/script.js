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

if (idade <= 12) {
    console.log("Criança");
}

else if (idade <=17) {
    console.log("Adolescente");
}

else if (idade <=59) {
    console.log("Adulto");
}

else {
    console.log("Idoso");
}

//4 - Senha com verificação dupla.

let senhaCorreta = "1234"
let acertou = false
let tentativas = 0

while (tentativas < 3) {
    tentativas++;
    let tentativaUsuario = "1234"

    if (tentativaUsuario === senhaCorreta) {
        console.log("Acesso permitido");
        acertou = true
        break;
    } else {
        console.log("Senha incorreta");
    }
}

if (!acertou) {
    console.log("Conta bloqueada");
}

//5 - Números ordenados.

let numeros = [8, 2, 5];

numeros.sort(function(a, b) {
    return a - b;
});

console.log("Números em ordem crescente:", numeros);

numeros.sort(function(a, b) {
    return b - a;
});

console.log("Números em ordem decrescente:", numeros);

