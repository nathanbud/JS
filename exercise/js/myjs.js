const fname = document.getElementById('fname');
const lname = document.querySelector('#lname');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    console.log(submit);
    console.log('fname', fname.value);
    console.log('lname', lname.value);
    // const fname = document
    //     .querySelector('#fname')
    //     .value;
    // console.log(e.target);
    // alert(`First name: ${fname}`);
    
});
