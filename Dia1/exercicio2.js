const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//exercicio1

//const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
};
console.log(authorBornIn1947());

//exercicio2

//const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach(book => {
    if (typeof nameBook !== "string" || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

console.log(smallerName());

//exercicio 3

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = () => {
  return books.find(book => book.name.length === 26);
};

console.log(getNamedBook());

//exercicio4

//const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every(book => book.author.birthYear < 2000 && book.author.birthYear > 1899)
}

console.log(everyoneWasBornOnSecXX());

//exercicio5

//const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {

  return books.some(book => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

//exercicio5

//const expectedResult = false;

const authorUnique = () => {
  return books.every((book, index) => {
    if (books.some((book2, index2) => {
      if (book.author.birthYear === book2.author.birthYear && index !== index2) {
        return true;
      }
      return false;
    }) !== true){
      return false
    }
  })
};

authorUnique();
console.log(authorUnique());