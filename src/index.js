function countrySubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  document.getElementById("city-info").innerHTML = `${searchInput.value}`;
  console.log(searchInput.value);
  let city = searchInput.value;
  let apiKey = "d67292210b7875b5cf04663144f38fa9";
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(`${apiCity}&appid=${apiKey}`).then(displayTemp);
}

function displayTemp(response) {
  console.log(response.data.main.temp);
  let cityTemp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = `${cityTemp}°`;
}

function currentTemp(response) {
  console.log(response.data.main.temp);
  let displayCity = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = `${displayCity}°`;
}
// displayTemp vars //

let searchInput = document.querySelector("#search-input");

let countryInput = document.querySelector(".rounded");
countryInput.addEventListener("submit", countrySubmit);

let currentDate = new Date();

let currentDay = currentDate.getDay();
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

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

document.getElementById("day-info").innerHTML = `${
  weekDays[currentDate.getDay()]
}, ${
  yearMonth[currentDate.getMonth()]
} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

document.getElementById(
  "time-info"
).innerHTML = `${currentHour}:${currentMinutes}`;

// displayTemp function vars //

let apiKey = "d67292210b7875b5cf04663144f38fa9";
let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&&units=metric`;
axios.get(`${apiCity}&appid=${apiKey}`).then(currentTemp);
