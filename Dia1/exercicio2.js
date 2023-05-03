const validateInfo = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias");
  }
};

const validateLegalAge = (age) => {
  if (age < 18){
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
  }
};

const studentRegister = (name, age) => {
  try {
    validateInfo(name, age);
    validateLegalAge(age)
    return `${name}, seja bem-vindo(a) à AuTrybe`
  } catch (error) {
    return error.message;
  }
};

console.log(studentRegister('Matheus', 18));