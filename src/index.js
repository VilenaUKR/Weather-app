let now = new Date();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "Fabruary",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = now.getDate();
let year = now.getFullYear();

function showCurrentDate() {
  let currantDay = document.querySelector("#currant-day");
  currantDay.innerHTML = `${day} ${hours}:${minutes}<br>${month} ${date}, ${year}`;
}
showCurrentDate();

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let fahrenheitDegrees = document.querySelector("#fahrenheit-degrees-link");
fahrenheitDegrees.addEventListener("click", convertToFahrenheit);
let celsiusDegrees = document.querySelector("#celsius-degrees-link");
celsiusDegrees.addEventListener("click", convertToCelsius);

// Homework

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}`;
}

function showCity(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#enter-city");
  let cardTitle = document.querySelector("#card-title");
  if (enterCity.value) {
    cardTitle.innerHTML = `${enterCity.value}`;
  } else {
    cardTitle.innerHTML = "Kyiv";
    alert("Please, enter a city");
  }

  let apiKey = "47cf9a4f3105e2e2829ab9feb92923d1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${enterCity.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

let showCityForm = document.querySelector("#show-city");
showCityForm.addEventListener("submit", showCity);

function showCurrentTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  let cardTitle = document.querySelector("#card-title");
  let CurrentCityName = response.data.name;
  cardTitle.innerHTML = `${CurrentCityName}`;
  temperatureElement.innerHTML = `${temperature}`;
}

function showCurrentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "47cf9a4f3105e2e2829ab9feb92923d1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showCurrentTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}
let buttonCurrentPosition = document.querySelector("#currant-location");
buttonCurrentPosition.addEventListener("click", getCurrentPosition);
