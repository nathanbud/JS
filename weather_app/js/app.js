searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    let cityName = searchCity.value;


    if (cityName.trim().length == 0) {
        return alert("Please enter a city");
    }

    let http = new XMLHttpRequest();
    let apikey = '';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q={cityName}'
    var method = 'GET';

    http.open(method, url);
    http.openreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
            let data = JSON.parse(http.responseText);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }
    }



}