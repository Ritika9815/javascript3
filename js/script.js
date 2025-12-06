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

/********************
FUNCTION: getWeatherData
********************/
async function getWeatherData() {

    // Step 1 – Read city from input
    let cityName = document.getElementById("cityInput").value.trim();
    
    // If empty input
    if (cityName === "") {
        outputDiv.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }
    // Step 2 –  API Key
    let apiKey = "3cec9d6f11b6d00d6d0eb924f5a063a9";

    // Step 3 – API URL
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        // Step 4 – Fetch request
        let response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("City not found");
        }

        let jsonData = await response.json();

        // Step 5 – Extract information
        let city = jsonData.name;
        let country = jsonData.sys.country;
        let temp = jsonData.main.temp;
        let feels = jsonData.main.feels_like;
        let humidity = jsonData.main.humidity;
        let desc = jsonData.weather[0].description;
        let iconCode = jsonData.weather[0].icon;

        // Step 6 – Weather icon URL
        let iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Step 7 – Display results
        outputDiv.innerHTML = `
            <h2>${city}, ${country}</h2>
            <img src="${iconURL}" alt="Weather Icon">
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Feels Like:</strong> ${feels}°C</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Condition:</strong> ${desc}</p>
        `;

    } catch (error) {
        // Step 8 – Error Message
        outputDiv.innerHTML = `<p>Error retrieving weather. Please check the city name and try again.</p>`;
        console.error("Fetch error:", error);
    }
}
