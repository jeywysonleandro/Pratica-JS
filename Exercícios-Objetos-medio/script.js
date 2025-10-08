//Questão 1 – Atualização de propriedades

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10
};

function atualizarPreco(obj, novoPreco) {
    obj.preco = novoPreco;
    return obj;
}

console.log(atualizarPreco(produto, 4000));

//Questão 2 – Soma de valores

const carrinho = {
    item1: 50,
    item2: 30,
    item3: 20
};

function totalCarrinho(obj) {
    let total = 0;
    for (let key in obj) {
        total += obj[key];
    }
    return total;
}

console.log(totalCarrinho(carrinho));

//Questão 3 – Verificação de chave

const pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

function temChave(obj, chave) {
    return obj.hasOwnProperty(chave);
}

console.log(temChave(pessoa, "idade")); 
console.log(temChave(pessoa, "altura"));

//