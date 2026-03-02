/**
    tasks:
    1.input nibe jodi input type delete hoy taile delete btn available hobe other wise disable thakbe.
 */
document.getElementById('input-text')
    .addEventListener('keyup', function(event){
        const dltBtn = document.getElementById('dlt-btn');

        if(event.target.value === 'Delete'){
            dltBtn.removeAttribute('disabled')
        }
        else{
            dltBtn.setAttribute('Disabled', false)
        }
})
const textDlt = document.getElementById('text-dlt');
document.getElementById('dlt-btn').addEventListener('click', function(){
    textDlt.style.display = 'none';
})

document.getElementById('reset-btn').addEventListener('click', function(){
    textDlt.style.display = ''
})
