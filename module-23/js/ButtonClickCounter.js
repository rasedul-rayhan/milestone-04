let countText = document.getElementById('count-text');
const valueUpBtn = document.getElementById('value-up-btn');

const valueDecriment = document.getElementById('value-down-btn')

let count = 0;

valueUpBtn.addEventListener('click', function(){
    count++;
    countText.innerText = count;
});

valueDecriment.addEventListener('click', valuelower)

function valuelower(){
    count--;
    countText.innerText = count;
}
