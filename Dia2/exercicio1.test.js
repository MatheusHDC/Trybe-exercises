const myRemove = require('./exercicio1.js').myRemove;
const myFizzBuzz = require('./exercicio1.js').myFizzBuzz;
const encode = require('./exercicio1.js').encode;
const decode = require('./exercicio1.js').decode;

// EXERCICIO 1:

describe('testa a função myRemove', () => {
    it('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('não deve retornar um array com o item incorreto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

// EXERCICIO 2:

describe('testa a função myFizzBuzz', () => {
    it('deve retornar fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
  
    it('deve retornar fizz', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });

    it('deve retornar buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    it('deve retornar o proprio numero', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('deve retornar false', () => {
        expect(myFizzBuzz('15')).toBe(false);
    });
});

// EXERCICIO 3:

describe('testa a função decode', () => {
    it('deve retornar function para decode', () => {
        expect(typeof decode).toBe('function');
    });

    it('deve retornar aeiou', () => {
        expect(decode('12345')).toEqual('aeiou');
    })

    it('nao deve converter', () => {
        expect(decode('67890')).toEqual('67890');
    })
});

describe('testa a função encode', () => {
    it('deve retornar function para encode', () => {
        expect(typeof encode).toBe('function');
    });
    
    it('deve retornar 12345', () => {
        expect(encode('aeiou')).toEqual('12345');
    })

    it('nao deve converter', () => {
        expect(encode('qwrtypsdfghjklzxcvbnm')).toEqual('qwrtypsdfghjklzxcvbnm');
    })
});