// for logout btn click
document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.replace('/index.html')
})

// get all elements btn

document.getElementById('add-money-p-btn').addEventListener('click', function(){
    // btnColor(0,allBtns)
    elementShow('add-money-container');
    // hide others options
    elementHide('cash-out-container');
    elementHide('transfer-money-container');

})

document.getElementById('cash-out-p-btn').addEventListener('click', function(){
    elementShow('cash-out-container');
    //hide other options
    elementHide('add-money-container');
    elementHide('transfer-money-container');

})
document.getElementById('transfer-money-p-btn').addEventListener('click', function(){
    elementShow('transfer-money-container');
    //hide other options
    elementHide('add-money-container');
    elementHide('cash-out-container');

})




