// Transforme a função numeroAleatorio em uma arrow function.

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

console.log(' ');
//Transforme a função hello em uma arrow function.

const hello = (nome) => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));

console.log(' ');
//Transforme a função nomeCompleto em uma arrow function.

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
  nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));