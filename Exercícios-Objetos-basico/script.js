//1. Criando um objeto pessoa

const pessoa = {
    nome: "Jeywyson",
    idade: 21,
    cidade: 'Caruaru'    
};
console.log(`Olá meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}.`);

//2. Alterando valores

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

console.log('Objeto antes');
console.log(carro);

carro.ano = 2022
carro.cor = "Prata"

console.log('\nObjeto DEPOIS:');
console.log(carro);

const animal = {
  especie: "Cachorro",
  nome: "Rex",
  idade: 3,
  cor: "Marrom",
  peso: 12
}

let contador = 0;

for (const propriedades in animal) {
    contador = contador + 1
}

console.log(`O objeto animal tem ${contador} propriedades`);
