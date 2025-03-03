document.getElementById('faq-container').style.display = 'none';
document.getElementById('discover-board').addEventListener('click',function(event){
   event.preventDefault();
    handleToggle('main-container','none');
    handleToggle('faq-container','block');
})
document.getElementById('btn-Desk').addEventListener('click',function(event){
    event.preventDefault();
    handleToggle('main-container','block');
    handleToggle('faq-container','none');
})



