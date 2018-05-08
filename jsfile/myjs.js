 


  let textResult = "";
  let text = document.querySelector('.text').innerHTML;
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let textArray = Array.from(text);
  let possibleArray = Array.from(possible);


function getMatch(Array1, Array2) {
    var matches = [];
setTimeout(function(){

 for ( var i = 0; i < Array1.length; i++ ) {
      console.log(Array1[i]);
        for ( var e = 0; e < Array2.length; e++ ) {
          console.log(Array2[e]);
            if ( Array1[i] === Array2[e] ) matches.push( Array1[i] );
        }
    }
    console.log(matches);




},30)
   
}
getMatch(textArray, possibleArray);


 


  




