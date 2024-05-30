const apiKey = "4e6b9b385b2cd81f20a9a2e8e08b706b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input") 
let searchButton = document.querySelector(".search button"); 
let weatherIcon = document.querySelector(".weather_icon");
let discription = document.querySelector(".discription")
let weatherInfo = document.querySelector(".weather")


async function checkWeather(city) {
  const responce = await fetch
    (apiUrl + city +`&appid=${apiKey}`)
  let data = await responce.json()
  console.log(data);

  if (data.cod == "404") {
    document.querySelector(".invalid").style.display = "block";
  }

  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;

    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`; 
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".city").innerHTML = data.name
    


  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png"
    discription.innerHTML = "Clear Skies"
  }
   if (data.weather[0].main == "Clouds") {
     weatherIcon.src = "images/clouds.png";
     discription.innerHTML = "Cloudy";
   }
   if (data.weather[0].main == "Drizzle") {
     weatherIcon.src = "images/drizzle.png";
     discription.innerHTML = "Drizzles";
   }
   if (data.weather[0].main == "Mist") {
     weatherIcon.src = "images/mist.png";
     discription.innerHTML = "Misty";
   }
   if (data.weather[0].main == "Rain") {
     weatherIcon.src = "images/rain.png";
     discription.innerHTML = "Rain Showers";
   }
   if (data.weather[0].main == "Snow") {
     weatherIcon.src = "images/snow.png";
     discription.innerHTML = "Snow";
   }
  
  weatherInfo.style.display = "block";
}
  
searchButton.addEventListener("click" ,()=>{
  checkWeather(searchBox.value)
})

searchBox.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value)
  }
} )
