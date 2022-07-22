/* let weather = {
  kiev: {
    temp: 29,
    humidity: 30,
  },
  odessa: {
    temp: 34,
    humidity: 50,
  },
  lviv: {
    temp: 28,
    humidity: 29,
  },
  chernigiv: {
    temp: 27,
    humidity: 20,
  },
  rivne: {
    temp: 26,
    humidity: 20,
  },
  chernivtsi: {
    temp: 28,
    humidity: 30,
  },
}; */

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let currentDay = document.querySelector("#current-day");
let day = days[now.getDay()];
currentDay.innerHTML = day;

let timeNow = document.querySelector("#time");
timeNow.innerHTML = now.getHours();

let minutes = document.querySelector("#minutes");
minutes.innerHTML = now.getMinutes();

/* function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#form-input");

  if (city) {
    searchLocation(city);
  } else {
    city = null;
    alert("Type something");
  }
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#weather");
  temperatureElement.innerHTML = `${temperature}°C`;
  currentCity.innerHTML = response.data.name;
}

function cityTemperature(event) {
  event.preventDefault();
}

function searchLocation(location) {
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;
  let key = "6fa0aa19737bc1b820cf0e5af8325e8f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showLocation(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(searchLocation);
}
 */
function showTemperature(response) {
  document.querySelector("#weather").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#current-city").innerHTML = response.data.name;
}

function searchCity(city) {
  let key = "6fa0aa19737bc1b820cf0e5af8325e8f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefaulf();
  let city = document.querySelector("#form-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = "6fa0aa19737bc1b820cf0e5af8325e8f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showCurrentLocation(position) {
  position.preventDefaulf();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", handleSubmit);

let btnCurrentLocation = document.querySelector("#button");
btnCurrentLocation.addEventListener("click", showCurrentLocation);

searchCity("Kiev");
