function countrySubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  document.getElementById("city-info").innerHTML = `${searchInput.value}`;
  console.log(searchInput.value);
  let city = searchInput.value;
  let apiKey = "d67292210b7875b5cf04663144f38fa9";
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiCity).then(displayTemp);
  axios.get(apiCity).then(currentForecast);
}

function displayTemp(response) {
  console.log(response.data.main.temp);
  let cityTemp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = `${cityTemp}°`;

  celsiusTemp = response.data.main.temp;
}

function currentTemp(response) {
  console.log(response.data.main.temp);
  console.log(response);
  let displayCity = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#current-temp");
  cityElement.innerHTML = `${displayCity}°`;

  celsiusTemp = response.data.main.temp;
}

function dateInfo(timestamp) {
  let currentDate = new Date(timestamp);

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentYear = currentDate.getMonth();

  let yearMonth = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${weekDays[currentDate.getDay()]}, ${
    yearMonth[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}.
  `;
}

function timeInfo(timestamp) {
  let currentDate = new Date(timestamp);

  let currentHour = currentDate.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = currentDate.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  return `Last time updated: ${currentHour}:${currentMinutes}`;
}

function currentForecast(response) {
  let displaySpeed = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind-speed");

  let displayDescription = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#weather-description");

  let displayHumidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#current-hmidity");

  let dateElement = document.querySelector("#current-date");
  let timeElement = document.querySelector("#current-time");

  let iconElement = document.querySelector("#weather-icon");

  windElement.innerHTML = `Wind speed: ${displaySpeed}km/h`;
  descriptionElement.innerHTML = `${displayDescription}`;
  humidityElement.innerHTML = ` Humidity: ${displayHumidity}%`;
  dateElement.innerHTML = dateInfo(response.data.dt * 1000);
  timeElement.innerHTML = timeInfo(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function displayFtemp(event) {
  event.preventDefault();
  let fahrenheit = (celsiusTemp * 9) / 5 + 32;
  let fElement = document.querySelector("#current-temp");
  fElement.innerHTML = Math.round(fahrenheit);
}

function displayCtemp(event) {
  event.preventDefault();
  let cElement = document.querySelector("#current-temp");
  cElement.innerHTML = Math.round(celsiusTemp);
}

let apiKey = "d67292210b7875b5cf04663144f38fa9";
let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&&units=metric`;
axios.get(apiCity).then(currentTemp);
axios.get(apiCity).then(currentForecast);

let searchInput = document.querySelector("#search-input");

let countryInput = document.querySelector(".rounded");
countryInput.addEventListener("submit", countrySubmit);

let fahrenheit = document.querySelector("#temp-fahrenheit");
fahrenheit.addEventListener("click", displayFtemp);

let celsius = document.querySelector("#temp-celsius");
celsius.addEventListener("click", displayCtemp);

celsiusTemp = null;
