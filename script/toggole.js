
document.getElementById('Discover-board').addEventListener('click',function(){
    handleToggle('main-container','none');
    handleToggle('FAQ-container','block');
})
document.getElementById('btn-Desk').addEventListener('click',function(){
    handleToggle('FAQ-container','none');
    handleToggle('main-container','block');
})