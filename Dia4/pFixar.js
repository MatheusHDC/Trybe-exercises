// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banan', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condençado', 'creme de leite', 'leite em pó'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));

// -----   2   ----- //


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};


const contemDois = {...user, ...jobInfos};

const {name, age, profession, nationality, squad, squadInitials} = contemDois

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);