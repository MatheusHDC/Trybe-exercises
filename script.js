const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(h1);

const mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

const frase = document.createElement('p');
frase.innerText = 'Texto sobre agencia';
centerContent.appendChild(frase);

const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
leftContent.appendChild(imagem);

const listaNaoOrdenada = document.createElement('ul');
rightContent.appendChild(listaNaoOrdenada);

const criaLista = () =>{
    for(let valor = 1; valor <= 10; valor += 1){
        const lista = document.createElement('li');
        lista.innerHTML = `${valor}`;
        listaNaoOrdenada.appendChild(lista);
    };
};
criaLista();

for(let index = 0; index < 3; index += 1){
    const h3 = document.createElement('h3');
    h3.innertext = index;
    mainContent.appendChild(h3);
};
