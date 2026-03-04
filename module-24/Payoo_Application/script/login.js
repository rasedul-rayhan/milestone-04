// login-Number
// login-pin

document.getElementById('login-btn').addEventListener('click', function(){

    // user given login number
    const loginNumber = document.getElementById('login-number').value;
    
    // user given login pin
    const loginPin = document.getElementById('login-pin').value;

    // default login number and pin:::
    // number: 01909450384
    // pin: 1234

    if(loginNumber == '01909450384' && loginPin == '1234'){
        alert('Login Successful');
        window.location.replace("/home.html")
    }
    else{
        alert('Try again with correct login info')
    }

})