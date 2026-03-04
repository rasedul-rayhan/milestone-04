// default user login number and pin:::
// number: 01909450384
// pin: 1234
const userNum = '01909450384';
const userPin = '1234';
console.log(userNum);

document.getElementById('login-btn').addEventListener('click', function(){

    // user given login number
    const loginNumber = document.getElementById('login-number').value;
    
    // user given login pin
    const loginPin = document.getElementById('login-pin').value;

    
    if(loginNumber == userNum && loginPin == userPin){
        alert('Login Successful');
        window.location.replace("/home.html")
    }
    else{
        alert('Try again with correct login info')
    }

})