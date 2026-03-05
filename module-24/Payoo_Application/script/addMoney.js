document.getElementById('add-money-btn').addEventListener('click', function(){
    const bankAcountNum = getValueById('bank-account-number');
    if(bankAcountNum.length == 11){
        // for amount calculation
        const amount = getValueById('add-money');
        const avalBalance = getTextById('balance')
        const newBalance = Number(avalBalance) + Number(amount)
        if(amount >= 100){
            if(isPinCorrect('add-money-pin')){
                alert('Added money successfully');
                // change available balance status
                textChange('balance', newBalance);
                
                // clear the transfer money input field
                valueChange('bank-account-number','');
                valueChange('add-money','');
                valueChange('add-money-pin','');
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
        alert('Invalid Bank account Number');
        return;
    }
    
})