function getWeather() {
    let location = document.getElementById('location');
    let sky = document.getElementById('main');
    let temperature = document.getElementById('temp');
    let feelsLike = document.getElementById('feelslike');
    let humidity = document.getElementById('humidity');
    let api = "https://api.openweathermap.org/data/2.5/weather";
    var apiKey = "2b20b87127e9f3cca813610855793343";
    let weatherIcon = document.getElementById('weather-icon');
    
    

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";
        

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                location.innerHTML =
                    data.name;
                sky.innerHTML =
                    data.weather[0].main;
                temperature.innerHTML =
                     data.main.temp + "\u00B0F";
                feelsLike.innerHTML =
                    "Feels Like: " + data.main.feels_like + "\u00B0F";
                humidity.innerHTML =
                    "Humidity: " + data.main.humidity + "%";
                let iconName =
                    data.weather[0].icon;
                let iconLocation = "<img src='img/"+iconName+".png'></img>";
                weatherIcon.innerHTML =
                    iconLocation;
                    
    
                    
                
                    
                
                    
            });
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }
}


getWeather();

