import { getWeather } from "./weather.js";
import { weather } from "./weatherCode.js";
import { setGraph } from "./chart.js";
import { showLocationErrorAlert } from "./locationError.js";

// getting current user coordinates
navigator.geolocation.getCurrentPosition(positionSussess, positionError);


function positionSussess({ coords }) {

    // maek call 
    getWeather(
        coords.latitude,
        coords.longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )
    .then(renderWeather)
    .catch(e => {
        console.error(e);
        showLocationErrorAlert('Error Getting Data From Server');
    })

}

function positionError() {
    showLocationErrorAlert('Ther Was An Error Getting You Location, Please enable your location services and refrech the page');
    document.body.classList.remove('blurred');
}




function renderWeather(data) {
    showCurrentWeather(data);
    showHourlyWeather(data);
    showTomorrowWeather(data)
    showDailyWeather(data)
    document.body.classList.remove('blurred');
}

const dailyWeatherContainer = document.querySelector(".week-weather");
const dayCardTemplate = document.querySelector('#day-week-template'); 
function showDailyWeather({ daily }) {

    // set container to be empty 
    dailyWeatherContainer.innerHTML = '';

    daily.restDays.forEach((day) => {

        const element = dayCardTemplate.content.cloneNode(true);
        assignValueToElement("week-day-name", day.dayName, element)
        setImage("week-day-weather", getIconUrl(day.weatherCode), element)
        assignValueToElement("week-day-weather-state", transformWeatherCode(day.weatherCode), element)
        assignValueToElement("week-day-weather-high", day.maxTemp, element)
        assignValueToElement("week-day-weather-low", day.minTemp, element)

        dailyWeatherContainer.appendChild(element);
    });
}

function showTomorrowWeather({ daily }) {
    console.log(daily);
    setImage("tomorrow-wetaher-image", getIconUrl(daily.tomorrow.weatherCode))
    assignValueToElement("tomorrow-weather-high", daily.tomorrow.maxTemp)
    assignValueToElement("tomorrow-weather-low", daily.tomorrow.minTemp)
    assignValueToElement("tomorrow-weather-state", transformWeatherCode(daily.tomorrow.weatherCode))
}

function showCurrentWeather({ current }) {
    setImage("current-weather-icon", getIconUrl(current.weatherCode))
    assignValueToElement("current-weather-state", transformWeatherCode(current.weatherCode))
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
}

function getIconUrl(iconCode) {

    return `https://basmilius.github.io/weather-icons/production/fill/all/${weather.get(iconCode)}.svg`
}

function setImage(imageDataSet, imageUrl, parentElement = null) {

    const image = parentElement != null ? parentElement.querySelector(`[data-${imageDataSet}]`) : document.querySelector(`[data-${imageDataSet}]`);

    image.src = imageUrl;

}

function assignValueToElement(elementDataSet, value, parentElement = null) {

    const element = parentElement != null ? parentElement.querySelector(`[data-${elementDataSet}]`) : document.querySelector(`[data-${elementDataSet}]`);

    element.textContent = '';
    element.textContent = value;    

}

function transformWeatherCode (weatherCode) {

    return weather.get(weatherCode).replace('-', ' ');

}

