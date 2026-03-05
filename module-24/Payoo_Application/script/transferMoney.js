// const userPin = '1234';

document.getElementById('send-now').addEventListener('click', function(){
    const userNum = getValueById('user-account-number');
    if((userNum.startsWith('019') || userNum.startsWith('017') || userNum.startsWith('016')) && (userNum.length == 11)){
        // for amount calculation
        const amount = getValueById('transfer-money');
        const avalBalance = getTextById('balance')
        const newBalance = Number(avalBalance) - Number(amount)
        if(newBalance >= 0){
            if(isPinCorrect('transfer-user-pin')){
                alert('Money Send successful');
                // change available balance status
                textChange('balance', newBalance);
                
                // clear the transfer money input field
                valueChange('user-account-number','');
                valueChange('transfer-money','');
                valueChange('transfer-user-pin','');
            }
            else{
                alert('Your pin wrong')
                return;
            }
        }
        else{
            alert('Invalid given balance');
            return;
        }
    }
    else{
        alert('Invalid Number');
        return;
    }
})
    
    
    