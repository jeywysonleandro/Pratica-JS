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

//