const body = document.querySelector('body');
const TextoALer = document.getElementById('texto-a-ler');
const backgroundColors = document.querySelectorAll('#background-color button');
const fontColor = document.querySelectorAll('#font-color button');
const fontSize = document.querySelectorAll('#font-size button');
const lineHeight = document.querySelectorAll('#line-height button');
const fontFamily = document.querySelectorAll('#font-family button');

const trocaFundo = () =>{
    for(let elementos of backgroundColors){
        elementos.addEventListener('click', ()=>{
            body.style.backgroundColor = elementos.innerText;
        });
    };
};
const corDaFonte = () =>{
    for(let elementos of fontColor){
        elementos.addEventListener('click', ()=>{
            body.style.color = elementos.innerText;
            TextoALer.style.borderColor = elementos.innerText; 
        });
    };
};

trocaFundo();
corDaFonte();