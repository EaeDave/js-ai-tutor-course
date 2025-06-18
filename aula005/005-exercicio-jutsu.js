const jutsu = {
    nome: 'Rasengan',
    rank: 'A',
    tipo: 'Ninjutsu',
    requerSelos: false,
    usuarios: ['Minato Namikaze', 'Jiraiya', 'Naruto Uzumaki']
}

console.log('Nome do Jutsu: ', jutsu.nome);
console.log('Requer selos? ', jutsu.requerSelos);

jutsu.variacao = 'Rasen-Shuriken';

jutsu.usuarios.push('Konohamaru Sarutobi');

console.log(jutsu);

