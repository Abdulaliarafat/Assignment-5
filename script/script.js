// btn1........
document.getElementById('btn-1').addEventListener('click',function(){
    const task = getInnerTextValueById('task');
    const countAdd = getInnerTextValueById('count-add');
    alert('Board update successfully')
    setInnerTextById('task',task - 1);
    setInnerTextById('count-add',countAdd+1);
    const historyContainer=document.getElementById('history-container');
    const fixTitle=document.getElementById('fix-1').innerText;
    const date = new Date().toLocaleString();
    const div =document.createElement('div');
    div.classList.add('p-5')
    div.innerHTML=`
    <p>You have completed ${fixTitle} at ${date}</p>
    `
    historyContainer.appendChild(div);
})
// btn2......
document.getElementById('btn-2').addEventListener('click',function(){
    const task = getInnerTextValueById('task');
    const countAdd = getInnerTextValueById('count-add');
    alert('Board update successfully')
    setInnerTextById('task',task - 1);
    setInnerTextById('count-add',countAdd+1);
    const historyContainer=document.getElementById('history-container');
    const fixTitle2=document.getElementById('fix-2').innerText;
    const date = new Date().toLocaleString();
    const div =document.createElement('div');
    div.classList.add('p-5')
    div.innerHTML=`
    <p>You have completed ${fixTitle2} at ${date}</p>
    `
    historyContainer.appendChild(div);
   
})
// btn3...
document.getElementById('btn-3').addEventListener('click',function(){
    const task = getInnerTextValueById('task');
    const countAdd = getInnerTextValueById('count-add');
    alert('Board update successfully')
    setInnerTextById('task',task - 1);
    setInnerTextById('count-add',countAdd+1);
    const historyContainer=document.getElementById('history-container');
    const fixTitle3=document.getElementById('fix-3').innerText;
    const date = new Date().toLocaleString();
    const div =document.createElement('div');
    div.classList.add('p-5')
    div.innerHTML=`
    <p>You have completed ${fixTitle3} at ${date}</p>
    `
    historyContainer.appendChild(div);
})
// btn4 ..
document.getElementById('btn-4').addEventListener('click',function(){
    const task = getInnerTextValueById('task');
    const countAdd = getInnerTextValueById('count-add');
    alert('Board update successfully')
    setInnerTextById('task',task - 1);
    setInnerTextById('count-add',countAdd+1);
    const historyContainer=document.getElementById('history-container');
    const fixTitle4=document.getElementById('fix-4').innerText;
    const date = new Date().toLocaleString();
    const div =document.createElement('div');
    div.classList.add('p-5')
    div.innerHTML=`
    <p>You have completed ${fixTitle4} at ${date}</p>
    `
    historyContainer.appendChild(div);
})
// btn5.......
document.getElementById('btn-5').addEventListener('click',function(){
    const task = getInnerTextValueById('task');
    const countAdd = getInnerTextValueById('count-add');
    alert('Board update successfully')
    setInnerTextById('task',task - 1);
    setInnerTextById('count-add',countAdd+1);
    const historyContainer=document.getElementById('history-container');
    const fixTitle5=document.getElementById('fix-5').innerText;
    const date = new Date().toLocaleString();
    const div =document.createElement('div');
    div.classList.add('p-5')
    div.innerHTML=`
    <p>You have completed ${fixTitle5} at ${date}</p>
    `
    historyContainer.appendChild(div);
   
})
// btn6....
document.getElementById('btn-6').addEventListener('click',function(){
    const task = getInnerTextValueById('task');
    const countAdd = getInnerTextValueById('count-add');
    alert('Board update successfully')
    setInnerTextById('task',task - 1);
    setInnerTextById('count-add',countAdd+1);
    const historyContainer=document.getElementById('history-container');
    const fixTitle6=document.getElementById('fix-6').innerText;
    const date = new Date().toLocaleString();
    const div =document.createElement('div');
    div.classList.add('p-5')
    div.innerHTML=`
    <p>You have completed ${fixTitle6} at ${date}</p>
    `
    historyContainer.appendChild(div);
    alert('Congrates!!! You have completed all the current task')
   
})


