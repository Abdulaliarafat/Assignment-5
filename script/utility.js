function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}

function getInnerTextValueById(id){
    const textValue =document.getElementById(id).innerText;
    const convertedTextValue=parseFloat(textValue);
    return convertedTextValue;
}
function setInnerTextById(id,value){
    document.getElementById(id).innerText=value;
}