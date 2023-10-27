import { getWeather } from "./weather.js";
import { weather } from "./weatherCode.js";
import { setGraph } from "./chart.js";


getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then(renderWeather)
    .catch(e => {
        console.error(e);
        // alert('Error Getting Data From Server');
    })


function renderWeather(data) {
    showCurrentWeather(data);
    showHourlyWeather(data);
    document.body.classList.remove('blurred');
}

const currentWeatherImage = document.querySelector("[data-current-weather-icon]")
function showCurrentWeather({ current }) {
    setImage("current-weather-icon", getIconUrl(current.weatherCode))
    assignValueToElement("current-weather-state", weather.get(current.weatherCode))
    assignValueToElement("current-weather-degree", current.currentTemp);
    assignValueToElement("current-weather-high", current.maxTemp);
    assignValueToElement("current-weather-low", current.minTemp);
    assignValueToElement("current-wind", current.windSpeed);
    assignValueToElement("current-humidity", current.humidity);
    assignValueToElement("chance-of-rain", current.precip);


}

function showHourlyWeather({ hourly }) {
    let hours = []
    let temperature = []
    
    for (let i = 0; i < 20; i ++) {

        hours.push(hourly[i].hour)
        temperature.push(hourly[i].temperature)

    }
    setGraph(hours, temperature);
    console.log(hours)
    console.log(temperature)
}

function getIconUrl(iconCode) {

    return `https://basmilius.github.io/weather-icons/production/fill/all/${weather.get(iconCode)}.svg`
}

function setImage(imageDataSet, imageUrl) {

    const image = document.querySelector(`[data-${imageDataSet}]`);

    image.src = imageUrl;

}

function assignValueToElement(elementDataSet, value) {
    const element = document.querySelector(`[data-${elementDataSet}]`);
    element.textContent = '';
    element.textContent = value;    

}

