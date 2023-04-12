const whereAreYou = document.getElementById('where-are-you');
const firstChildOfChild = document.getElementById('first-child-of-child');
const elementoPai = whereAreYou.parentNode;
const firstChild = elementoPai.firstElementChild;
const firstChild2 = whereAreYou.previousElementSibling;
const atencao = whereAreYou.nextSibling;
const thirdChild = whereAreYou.nextElementSibling;
const thirdChild2 = elementoPai.lastElementChild.previousElementSibling;

elementoPai.style.color = 'blue';
firstChildOfChild.innerText = 'First child of child';