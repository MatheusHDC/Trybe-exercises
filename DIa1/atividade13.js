let nota = 50;
console.log (nota);
 if(nota >= 80){
    nota = 'A';
 }else if(nota >= 60 && nota < 80){
    nota = 'B';
 }else if(nota >= 40 && nota < 60){
    nota = 'C';
 }else if(nota >= 20 && nota < 40){
    nota = 'D';
 }else if(nota < 20 && nota > 0){
    nota = 'E';
 }else if(nota === 0){
    nota = 'F';
 };
 console.log(nota);