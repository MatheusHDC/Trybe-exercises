const body = document.querySelector('body');
const textoALer = document.getElementById('texto-a-ler');
const backgroundColors = document.querySelectorAll('#background-color button');
const fontColor = document.querySelectorAll('#font-color button');
const fontSize = document.querySelectorAll('#font-size button');
const lineHeight = document.querySelectorAll('#line-height button');
const fontFamily = document.querySelectorAll('#font-family button');

const trocaBackGroundColor = () =>{
    for(let elementos of backgroundColors){
        elementos.addEventListener('click', ()=>{
            body.style.backgroundColor = elementos.innerText;
        });
    };
};

const trocaFontColor = () =>{
    for(let elementos of fontColor){
        elementos.addEventListener('click', ()=>{
            body.style.color = elementos.innerText;
            TextoALer.style.borderColor = elementos.innerText; 
        });
    };
};

const trocaFontSize = () =>{
    for(let elementos of fontSize){
        elementos.addEventListener('click', ()=>{
            body.style.fontSize = elementos.innerText;
        });
    };
};

const trocaLineHeigth = () =>{
    for(let elementos of lineHeight){
        elementos.addEventListener('click', ()=>{
            textoALer.style.lineHeight = elementos.innerText;
        });
    };
};

trocaBackGroundColor();
trocaFontColor();
trocaFontSize();
trocaLineHeigth();