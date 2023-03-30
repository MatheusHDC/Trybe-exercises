let n = 5;
let linha = '';
for(let index = 0; index < n; index += 1){
    if(linha.length < (n)){
        linha =linha + '*';
        index -= 1;
    }else{
        console.log(linha);
    };
};