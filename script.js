let weather = {
    "apiKey" : "5abc8d09ff5581b7e1cf8c07b0bab03c",
    
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    fetchAutoWeather : function(){
        navigator.geolocation.getCurrentPosition(this.locationFunc);
    },

    locationFunc : function(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let url = ("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&appid=5abc8d09ff5581b7e1cf8c07b0bab03c");
        fetch(url).then(response => response.json())
        .then((data) => {
            const {name} = data;
            const {icon, description} = data.weather[0];
            const {temp, humidity} = data.main;
            const{speed} = data.wind;
    
            // console.log(name, icon, description, feels_like, humidity, speed);
    
            document.querySelector(".city").innerHTML = "Weather in " + name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
            document.querySelector(".description").innerHTML = description;
            document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%"
            document.querySelector(".temp").innerHTML = temp + "°C";
            document.querySelector(".wind").innerHTML = "WindSpeed : " + speed + "km/h";
        });
    },

    displayWeather:function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const{speed} = data.wind;

        // console.log(name, icon, description, feels_like, humidity, speed);

        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%"
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".wind").innerHTML = "WindSpeed : " + speed + "km/h";

    }, 
    search:function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
        if(document.querySelector(".searchBar").value == ""){
            alert("Please enter the city name !");
        }
    }
}

document.querySelector(".searchButton").addEventListener("click", function() {
    weather.search();
    
});

setTimeout(function(){
    weather.fetchAutoWeather()
}, 1000);






search:function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
    if(document.querySelector(".searchBar").value == ""){
        alert("Please enter the city name !");
    }
}


// link:https://api.openweathermap.org/data/2.5/weather?q=Bareilly&units=metric&appid=5abc8d09ff5581b7e1cf8c07b0bab03c

// "https://openweathermap.org/img/wn/01@2x.png"

// command: weather.fetchWeather("Bareilly");