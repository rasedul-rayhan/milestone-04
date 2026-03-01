document.getElementById('update-title-btn').addEventListener('click', function(){
    const inputText = document.getElementById('input-text')
    
    let pageTitle = document.getElementById('page-title');
    pageTitle.innerText = inputText.value;
})