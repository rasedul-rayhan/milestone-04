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

                // making history
                const history = document.getElementById('transaction-history');
                const newTransaction = document.createElement('div');
                // for date and time 
                const now = new Date();
                const hour = now.getHours();
                const minute = now.getMinutes();
                const month = now.getMonth() + 1; // month starts from 0
                newTransaction.innerHTML = `
                    <div class="card bg-base-100 shadow-2xl rounded-2xl p-2.5 my-2">
                        <h4 class="font-bold">Withdraw Money</h4>
                        <p>${amount} taka Withdraw to ${agentNum} at ${hour}:${minute}</p>
                    </div>
                `
                history.appendChild(newTransaction) 



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