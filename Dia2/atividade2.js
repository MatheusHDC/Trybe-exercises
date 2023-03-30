let num = 10;
let fatorial = num;

for(let index = num - 1; index >= 1; index -= 1){
    fatorial *= index;
}

console.log(fatorial);