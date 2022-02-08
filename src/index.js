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
  let displayCity = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#current-temp");
  tempElement.innerHTML = `${cityTemp}°`;
}

function currentTemp(response) {
  console.log(response.data.main.temp);
  console.log(response);
  let displayCity = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#current-temp");
  cityElement.innerHTML = `${displayCity}°`;
}

function dateInfo(timestamp) {
  let currentDate = new Date(timestamp);

  let currentHour = currentDate.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = currentDate.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

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
  Last time updated: ${currentHour}:${currentMinutes}`;
}

function currentForecast(response) {
  let displaySpeed = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind-speed");

  let displayDescription = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#weather-description");

  let displayHumidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#current-hmidity");

  let displayDate = response.data.dt;
  let dateElement = document.querySelector("#current-date");

  let iconElement = document.querySelector("#weather-icon");

  windElement.innerHTML = `Wind speed: ${displaySpeed}km/h`;
  descriptionElement.innerHTML = `${displayDescription}`;
  humidityElement.innerHTML = ` Humidity: ${displayHumidity}%`;
  dateElement.innerHTML = dateInfo(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let apiKey = "d67292210b7875b5cf04663144f38fa9";
let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&&units=metric`;
axios.get(apiCity).then(currentTemp);
axios.get(apiCity).then(currentForecast);

// displayTemp vars //

let searchInput = document.querySelector("#search-input");

let countryInput = document.querySelector(".rounded");
countryInput.addEventListener("submit", countrySubmit);
