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
