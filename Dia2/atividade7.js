let n = 5;
let linha = '';
let position = n - 1;
for(let index = 0; index < n; index = index){
    if(linha.length < position){
        linha =linha + ' ';
    }else if(linha.length < n){
        linha = linha + '*';
    }else{
        console.log(linha);
        linha = '';
        position -= 1;
        index += 1;
    };
};