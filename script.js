"use strict";
// API Data GET

const apiUrlCurrent =
  "https://api.openweathermap.org/data/2.5/weather?lat=29.3117&lon=47.4818&appid=4c81cb1988ddaba2743cd79b625f27cd";

axios({
  method: "get",
  url: apiUrlCurrent,
  responseType: "stream",
}).then((res) => {
  console.log(res.data);
});

// const apiUrlMultipleDays =
//   "http://api.openweathermap.org/data/2.5/forecast?lat=29.3117&lon=47.481&units=metric&appid=4c81cb1988ddaba2743cd79b625f27cd";

const apiUrlMultipleDays =
  "http://api.openweathermap.org/data/2.5/forecast?lat=29.3117&lon=47.4818&units=metric&appid=4c81cb1988ddaba2743cd79b625f27cd";

axios({
  method: "get",
  url: apiUrlMultipleDays,
  responseType: "stream",
}).then((res) => {
  console.log(res.data);
});
