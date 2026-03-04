const userPin = '1234';

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const agentNum = getValueById('agent-number');

    if((agentNum.startsWith('019') || agentNum.startsWith('017') || agentNum.startsWith('016')) && (agentNum.length == 11)){
        // for amount calculation
        const amount = getValueById('cashout-amount');
        const avalBalance = getTextById('balance')
        const newBalance = Number(avalBalance) - Number(amount)
        if(newBalance >= 0){
            // check pin
            const cashoutpin = getValueById('cashout-pin');
            if(cashoutpin == userPin){

                alert('Money withdraw successful')
                // change available balance status
                textChange('balance', newBalance);

                // clear the withdraw input field
                valueChange('agent-number','');
                valueChange('cashout-amount','');
                valueChange('cashout-pin','');

            }
            else{
                alert('Your pin wrong')
                return;
            }
        }
        else{
            alert('Invalid Number');
            return;
        }
    }
    else{
        alert('Invalid Number');
        return;
    }
})