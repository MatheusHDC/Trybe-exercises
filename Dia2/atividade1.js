let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = 0;
let menorValor = numbers[0];
let numerosImpares = 0;
let arrayACriar = [];

for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);

    soma = soma + numbers[index];

    if(numbers[index] > maiorValor){
        maiorValor = numbers[index];
    };
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    };

    if(numbers[index] % 2 !== 0){
        numerosImpares += 1;
    };
};

let media = soma / numbers.length;

console.log("soma dos numeros: " + soma);
console.log("essa é a media: " + media);
console.log("esse é o maior valor: " + maiorValor);
console.log("esse é o menor valor: " + menorValor);
if(media > 20){
    console.log("a media é maior que 20");
}else{
    console.log("a media é menor ou igual a 20");
};

if(numerosImpares > 0){
    console.log("numero de valores impares: " + numerosImpares);
}else{
    console.log("Nenhum valor ipar encontrado.")
};

for(let index = 1; arrayACriar[arrayACriar.length - 1] !== 25; index += 1){
    arrayACriar.push(index);
    console.log(arrayACriar[arrayACriar.length - 1] / 2);
};

console.log ("arrya criado: " + arrayACriar);