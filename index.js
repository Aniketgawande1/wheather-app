// const apiKey = "360c2c010a60707fc386c738b1721026";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=360c2c010a60707fc386c738b1721026&units=metric";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector("wheather-icon");

// async function checkWeather(){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`  );
//     var data = await response.json();
//     console.log(data);
//     // document.querySelector("city").innerHTML = data.name;
//     // document.querySelector("temp").innerHTML = Math.round(data.main.temp ) +"°C";
//     // document.querySelector("humidity").innerHTML = data.main.humidity +"%";
//     // document.querySelector("wind").innerHTML = data.wind.speed + "km/";

//     // if (data.weather[0].main == "Clouds"){
//     //     weatherIcon.src = "images/clouds.png"
//     // }
//     // else if (data.weather[0].main == "Clear"){
//     //     weatherIcon.src = "images/clear.png"
//     // }
//     //  else if (data.weather[0].main == "Rain"){
//     //     weatherIcon.src = "images/rain.png"
//     // }
//     //   else if (data.weather[0].main == "Clouds"){
//     //     weatherIcon.src = "images/rain.png"
//     // }
    
    
    
    

    

// }
// searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
// })
const apiKey = "360c2c010a60707fc386c738b1721026";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
