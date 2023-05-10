//1
console.log('--- 1 ---')

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach(element =>  console.log(`O email ${element} está cadastrado em nosso banco de dados!`));

//2
console.log('--- 2 ---');

const numbers = [19, 21, 30, 3, 45, 22, 15];
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(numbers.find((num) => num % 5 === 0));
console.log(names.find((e) => e.length === 5));
console.log(musicas.find((music) => music.id === '31031685').title);

//3
console.log('--- 3 ---');

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(n => n === name);

console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));
console.log(' ');

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, age) => arr.every(e => e.age >= age);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));