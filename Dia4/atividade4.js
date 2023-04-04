let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function adicionaTurno(objeto, chave, valor){
    objeto[chave] = valor;
}

adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

function listaKeys(obj){
    return Object.keys(obj);
}
console.log(listaKeys(lesson1));

function tamanhoObj(obj){
    return Object.keys(obj).length;
}
console.log(tamanhoObj(lesson1));

function listaValores(obj){
    return Object.values(obj);
}
console.log(listaValores(lesson1));

let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
  });
console.log(allLessons);

function estudatesTotais(obj){
    return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
};
console.log(estudatesTotais(allLessons));

function getValueByNumber(obj, number) {
    return Object.values(obj)[number];
};

function verifyPair(obj, key, value){
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));