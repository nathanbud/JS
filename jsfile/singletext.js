 


  let textResult = "";
  let text = document.querySelector('.text-content').innerHTML;
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let textArray = Array.from(text);
  let possibleArray = Array.from(possible);


function getMatch(Array1) {
    
setTimeout(function(){
     for ( var i = 0; i < Array1.length; i++ ) {
 textResult =  Array1[i];
      console.log(textResult);   
 
    
     
}
}
, 3000);


}


 getMatch(textArray);
 


  




