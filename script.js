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

