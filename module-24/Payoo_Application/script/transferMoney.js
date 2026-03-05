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
                
                // for make a history
                const history = document.getElementById('transaction-history');
                const newTransaction = document.createElement('div');
                // for date and time 
                const now = new Date();
                const hour = now.getHours();
                const minute = now.getMinutes();
                const month = now.getMonth() + 1; // month starts from 0
                newTransaction.innerHTML = `
                    <div class="card bg-base-100 shadow-2xl rounded-2xl p-2.5 my-2">
                        <h4 class="font-bold">Added Money</h4>
                        <p>${amount} taka send to ${userNum} at ${hour}:${minute}</p>
                    </div>
                `
                history.appendChild(newTransaction)


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
    
    
    