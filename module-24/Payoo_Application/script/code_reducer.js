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

function isPinCorrect(pin){
    const inputPin = getValueById(pin);
    if(inputPin == '1234'){
        return true;
    }
    else{
        return false;
    }
}

// element hide
function elementHide(idName){
    const element = document.getElementById(idName);
    element.classList.add('hidden');
}
// element show
function elementShow(idName){
    const element = document.getElementById(idName);
    element.classList.remove('hidden');
}


function btnColor(index){
    const listItem = document.getElementsByClassName('main-btn');
    for(let i = 0; i < listItem.length; i++){
        // console.log(listItem[i].innerText);
        if(i == index){
            listItem[i].style.backgroundColor = '#513ec9';
            listItem[i].style.color = 'white';
            continue;
        }
        else{
            listItem[i].style.backgroundColor = '';
            listItem[i].style.color = '';
            
        }
    }
}

