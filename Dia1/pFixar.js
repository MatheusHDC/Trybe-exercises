const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const naoExecuta = (event) =>{event.preventDefault();};

HREF_LINK.addEventListener('click', naoExecuta);
INPUT_CHECKBOX.addEventListener('click', naoExecuta)
INPUT_TEXT.addEventListener('keypress', (event) =>{
    (event.key === 'a')? true : event.preventDefault();
});