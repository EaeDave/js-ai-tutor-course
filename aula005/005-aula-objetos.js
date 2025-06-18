// Criando um objeto para representar um ninja
const ninja = {
  nome: 'Kakashi Hatake',
  vila: 'Aldeia da Folha',
  rank: 'Jounin',
  idade: 27,
  jutsus: ['Chidori', 'Rasengan', 'Kamui']
};

// Exibindo o objeto inteiro no console
console.log(ninja);

// Acessando o nome do ninja
const nomeDoNinja = ninja.nome;
console.log('O nome do ninja é: ' + nomeDoNinja);

// Acessando o rank
console.log('O rank dele é: ' + ninja.rank);

// Acessando o primeiro jutsu da lista de jutsus
const primeiroJutsu = ninja.jutsus[0];
console.log('Seu jutsu principal é: ' + primeiroJutsu);

// Kakashi foi promovido! Vamos atualizar seu rank.
console.log('--- O tempo passou... ---');
ninja.rank = 'Hokage';
console.log('O novo rank do Kakashi é: ' + ninja.rank);

// Também podemos adicionar uma propriedade que não existia.
ninja.sensei = 'Minato Namikaze';
console.log('O sensei dele era: ' + ninja.sensei);

// Vamos ver como ficou a ficha completa no final
console.log('--- Ficha atualizada ---');
console.log(ninja);