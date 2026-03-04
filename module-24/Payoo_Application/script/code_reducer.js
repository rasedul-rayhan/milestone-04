function getValueById(id){
    const elementInput = document.getElementById(id);
    const value = elementInput.value;
    return value;
}

function getTextById(id){
    const element = document.getElementById(id);
    const text = element.innerText;
    return text;
}

function textChange(id,newText){
    const textElement = document.getElementById(id);
    textElement.innerText = newText;
}

function valueChange(id,newValue){
    const inputElement = document.getElementById(id);
    inputElement.value = newValue;
}