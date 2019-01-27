
const submitButton = document.getElementById('submit-get');

submitButton.addEventListener('click', getData);

function getData(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './data.txt');

    xhr.onload = function(){
console.log(xhr.responseText);    
    }
    
    xhr.send();

}
