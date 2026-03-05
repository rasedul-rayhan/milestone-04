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
                        <p>${amount} taka added from ${bankAcountNum} at ${hour}:${minute}</p>
                    </div>
                `
                history.appendChild(newTransaction) 


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