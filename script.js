"use strict";
// const apiUrlMultipleDays =
//   "http://api.openweathermap.org/data/2.5/forecast?lat=29.3117&lon=47.4818&units=metric&appid=4c81cb1988ddaba2743cd79b625f27cd";

// axios({
//   method: "get",
//   url: apiUrlMultipleDays,
//   responseType: "stream",
// }).then((res) => {
//   console.log(res.data.list[0]);
// });

const body = document.querySelector("body");
const weatherImg = document.querySelector("#weather-img");
const temperature = document.querySelector(".temperature");
const country = document.querySelector(".country");
const skyStatus = document.querySelector(".sky-status");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

const apiUrlCurrent =
  "https://api.openweathermap.org/data/2.5/weather?lat=29.3117&units=metric&lon=47.4818&appid=4c81cb1988ddaba2743cd79b625f27cd";

axios({
  method: "get",
  url: apiUrlCurrent,
  responseType: "stream",
}).then((res) => {
  console.log(res.data);
  temperature.innerText = `${Math.round(res.data.main.temp)}°C`;
  country.innerText = `${res.data.name}, ${res.data.sys.country}`;
  skyStatus.innerText = `${res.data.weather[0].description}`;
  humidity.innerText = `${res.data.main.humidity}%`;
  windSpeed.innerText = `${Math.round(res.data.wind.speed)} m/s`;
  // //////////////    Icon related  ////////////////////////////////
  const icon = res.data.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherImg.src = iconURL;
  // //////////////////////////////////////////////////////////////////
});

// by city name
// "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
