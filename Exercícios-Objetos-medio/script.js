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

