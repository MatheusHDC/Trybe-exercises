const criaEmail = (fullName) => {
  return (`${fullName.toLowerCase().split(' ').join('_')}@trybe.com`);
};

const personObj = (fullName) => {
  const email = criaEmail(fullName);
  return { [fullName]: email };
};

const newEmployees = (função) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }

  employees.id1 = { Pedro: função('Pedro Guerra') };
  employees.id2 = { Luiza: função('Luiza Drumond') };
  employees.id3 = { Carla: função('Carla Paiva') };


  return employees;
};

const checaNum = (num, numSorteado) => num === numSorteado;

const sorteiaNum = (num, checar) => {
  const numSorteado = Math.floor(Math.random() * 5 + 1);
  const ganhou = checar(num, numSorteado);
  return { ganhou, num, numSorteado };
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaNota = (array1, array2) => {
  nota = 0;
  array1.forEach((element, index) => {
    if (array2[index] !== 'N.A'){
      (element === array2[index]) ? nota += 1 : nota -= 0.5;
    }
  });
  return nota;
};

const chamaFuncao = (array1, array2, funcao) => funcao(array1, array2);

console.log(chamaFuncao(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaNota));