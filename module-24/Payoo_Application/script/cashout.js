const userPin = '1234';

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const agentNum = getValueById('agent-number');
    if((agentNum.startsWith('019') || agentNum.startsWith('017') || agentNum.startsWith('016')) && (agentNum.length == 11)){
        // for amount calculation
        const amount = getValueById('withdraw-amount');
        const avalBalance = getTextById('balance')
        const newBalance = Number(avalBalance) - Number(amount)
        if(newBalance >= 0){
            // check pin
            if(isPinCorrect('withdraw-user-pin')){
                alert('Money withdraw successful');
                // change available balance status
                textChange('balance', newBalance);

                // clear the withdraw input field
                valueChange('agent-number','');
                valueChange('cashout-amount','');
                valueChange('user-pin','');

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