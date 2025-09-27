//1 – Imposto de Renda Progressivo

let renda =50000;
let imposto = 0;

if (renda <= 20000) {
    imposto = 0;
    console.log("Isento de imposto");
}

else if (renda <= 40000) {
        imposto = (renda - 20000) * 0.10;
    console.log("Imposto: R$ " + imposto.toFixed(2));
}

else if (renda <= 80000) {
    imposto = (20000 * 0.10) + (renda - 40000) * 0.20;
    console.log("Imposto: R$ " + imposto.toFixed(2));
}


else {
    imposto = (20000 * 0.10) + (40000 * 0.20) + (renda - 80000) * 0.30;
    console.log("Imposto: R$ " + imposto.toFixed(2));
}

console.log("Renda líquida: R$ " + (renda - imposto).toFixed(2));

//2 – Sistema de notas com classificação múltipla

let nota = 90;

if (nota >=90) {
    console.log("A");
}

else if (nota >=80) {
    console.log("B");
}

else if (nota >=70) {
    console.log("C");
}

else if (nota >=60) {
    console.log("D");
}

else {
    console.log("F");
}

//3 - Maior de Três Números

let num1 = 500
let num2 = 643
let num3 = 34

if (num1 > num2 && num1 > num3) {
    console.log("num1 é maior");
}

else if (num2 > num1 && num2 > num3) {
    console.log("num2 é maior");
}

else {
    console.log("num3 é maior")
};

//4 - Calculadora de IMC linha por linha

let peso = 60;
let altura = 1.68;

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
    
}

else if (imc < 25) {
    console.log("Normal");
    
}

else if (imc < 30) {
    console.log("Sobrepeso");
        
}

else {
    console.log("Obesidade");
    
}
