const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    const fname = document
        .querySelector('#fname')
        .value;
    console.log(e.target);
    alert(`First name: ${fname}`);
});
