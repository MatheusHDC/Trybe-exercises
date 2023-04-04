let angulo1 = 10;
let angulo2 = 60;
let angulo3 = 90;
let soma = angulo1 + angulo2 + angulo3;
let resultado = null;

if( angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && soma === 180){
    resultado = true;
}else{
    resultado = false;
}
console.log(resultado);