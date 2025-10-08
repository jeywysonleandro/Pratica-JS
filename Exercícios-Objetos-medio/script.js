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

//Questão 4 – Contagem de alunos em array de objetos

const aulas = [
  { curso: "JS", alunos: 20 },
  { curso: "Python", alunos: 15 },
  { curso: "HTML", alunos: 10 }
];

function totalAlunos(array) {
  let total = 0;
  for (const aula of array) {
    total += aula.alunos;
  }
  return total;
}

console.log(totalAlunos(aulas));

//Questão 5 – Alterar valores específicos

const funcionarios = [
  { nome: "Carlos", setor: "Vendas" },
  { nome: "Maria", setor: "Marketing" },
  { nome: "João", setor: "Vendas" }
];

function mudarSetor(array, nomeFuncionario, novoSetor) {
  for (const funcionario of array) {
    if (funcionario.nome === nomeFuncionario) {  // encontra o funcionário pelo nome
      funcionario.setor = novoSetor;             // altera o setor
    }
  }
  return array;
}

console.log(mudarSetor(funcionarios, "Maria", "RH"));
