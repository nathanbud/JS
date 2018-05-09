 


  let textResult = "";
  let text = document.querySelector('.text-content').innerHTML;
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let textArray = Array.from(text);
  let possibleArray = Array.from(possible);


(function getText(i) {
	if (i == textArray.length) return;
  setTimeout(function () {
 textResult +=  textArray[i];
      document.querySelector('.text-content').innerHTML = textResult;
      console.log(textResult);

    if (++i) {          // If i > 0, keep going
      getText(i);       // Call the loop again, and pass it the current value of i
    }
  }, 300);
})(0);




