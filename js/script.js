/*
Name: Ritika
File: script.js
Description:
- This file connects to the OpenWeatherMap API.
- It retrieves weather information using a city name.
- It displays the temperature, humidity, condition,
and a weather icon.
*/


// MAIN VARIABLES
let btnGetWeather = document.getElementById("btnGetWeather");
let outputDiv = document.getElementById("weatherOutput");


// MAIN EVENT LISTENER
btnGetWeather.addEventListener("click", getWeatherData);