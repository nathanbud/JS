
var submitGet = document.getElementById('submit-get');

submitGet.addEventListener('click', getData);

function getData(){

    const xhr = new XMLHttpRequest();
    method = 'GET';
    url = './data.txt';
    xhr.open(method, url, true);


// OLDER FUNCTION
    // xhr.onreadystatechange = function(){
    //     if(this.readyState === 3){
    //         console.log("loading");    
    //     }
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }

    xhr.onprogress = function(){
        console.log("Loading", xhr.readyState);
    }
        
    xhr.onload = function(){
        if(this.readyState === 3){
            console.log("still loading");    
        }
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }

    xhr.send();

}

