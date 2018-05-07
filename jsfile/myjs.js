 

  function writeText() {
    var txt = document.querySelector('.text').innerHTML;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i <1; i++)
    text += possible;
    
  console.log(text);


 for (var i = 0; i <txt.length; i++)
  Array.from(txt);
    txt +=txt;
  console.log(txt);


  }

writeText();


