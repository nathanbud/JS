searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    let cityName = searchCity.value;


    if (cityName.trim().length == 0) {
        return alert("Please enter a city");
    }

    let http = new XMLHttpRequest();
    let apiKey = 'e72a4b1901da3ae63f2b229a8878f024';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName} &units=metric&appid=${apiKey}`;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
            let data = JSON.parse(http.responseText);
            console.log("weatherData");
            let weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            console.log(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }
    };
    http.send();



}