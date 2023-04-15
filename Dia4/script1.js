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
            armazenaDados('backGroundColor', body.style.backgroundColor);
        });
    };
};

const trocaFontColor = () =>{
    for(let elementos of fontColor){
        elementos.addEventListener('click', ()=>{
            body.style.color = elementos.innerText;
            textoALer.style.borderColor = elementos.innerText; 
            armazenaDados('fontColor', body.style.color);
        });
    };
};

const trocaFontSize = () =>{
    for(let elementos of fontSize){
        elementos.addEventListener('click', ()=>{
            body.style.fontSize = elementos.innerText;
            armazenaDados('fontSize', body.style.fontSize);
        });
    };
};

const trocaLineHeigth = () =>{
    for(let elementos of lineHeight){
        elementos.addEventListener('click', ()=>{
            textoALer.style.lineHeight = elementos.innerText;
            armazenaDados('lineHeight', textoALer.style.lineHeight);
        });
    };
};

const trocaFontFamily = () =>{
    for(let elementos of fontFamily){
        elementos.addEventListener('click', ()=>{
            textoALer.style.fontFamily = elementos.innerText;
            armazenaDados('fontFamily', textoALer.style.fontFamily);
        });
    };
};

const armazenaDados = (chave, dados) =>{
    localStorage.setItem(chave, dados);
 };

 const carregaDados = () =>{
    body.style.backgroundColor = localStorage.getItem('backGroundColor');
    body.style.color = localStorage.getItem('fontColor');
    body.style.fontSize = localStorage.getItem('fontSize');
    textoALer.style.lineHeight = localStorage.getItem('lineHeight');
    textoALer.style.fontFamily = localStorage.getItem('fontFamily');
    textoALer.style.borderColor = localStorage.getItem('fontColor');
 };
 carregaDados();

trocaBackGroundColor();
trocaFontColor();
trocaFontSize();
trocaLineHeigth();
trocaFontFamily();