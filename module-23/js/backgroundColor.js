// for backgroud black
const makeBgBlack = document.getElementById('make-bg-black');
makeBgBlack.addEventListener('click', function (){
    document.body.style.backgroundColor = 'black';
})

// for backgroud white
const makeBgWhite = document.getElementById('make-bg-white');
makeBgWhite.addEventListener('click', function(){
    document.body.style.backgroundColor = 'White';
})

// for light on of
let flag = false;
const light = document.getElementById('light');
light.addEventListener('click', function(){
    light.innerText = "Light OFF";
    flag = true;
    
})