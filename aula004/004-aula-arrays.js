// Criando um Array com os nomes do Time 7
const time7 = ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno'];

// Exibindo o Array inteiro no console
console.log(time7);

// Acessando o segundo membro da equipe (índice 1)
const segundoMembro = time7[1];

console.log('O segundo membro do Time 7 é:');
console.log(segundoMembro);

// Verificando quantos membros a equipe tem
const totalDeMembros = time7.length;

console.log('O time 7 tem:');
console.log(totalDeMembros + ' membros.');

// Adicionando um novo membro ao time
console.log('Adicionando o Capitão Yamato ao time...');
time7.push('Capitão Yamato');

// Exibindo a nova formação e o novo tamanho
console.log('A nova formação do Time 7 é:');
console.log(time7);
console.log('Agora o time tem ' + time7.length + ' membros.');

// Substituindo um membro da equipe
console.log('Sasuke deixou a equipe... Sai irá substituí-lo.');
time7[1] = 'Sai';

console.log('A formação final do "Time Kakashi" é:');
console.log(time7);
