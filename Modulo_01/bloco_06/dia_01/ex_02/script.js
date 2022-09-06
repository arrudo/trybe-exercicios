// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', mouseClick)

function mouseClick(event){
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', mouseClick2)

function mouseClick2(event){
    event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', keyPress)

function keyPress(event){
    const letra = event.key;
    if (letra !== 'a'){
    event.preventDefault();
    }
}