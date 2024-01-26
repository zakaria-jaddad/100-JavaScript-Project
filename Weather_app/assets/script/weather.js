// this is a day fromatter to get name of day from a timestamp number 
const DAY_FORMATTER_SHORT = new Intl.DateTimeFormat(undefined, {weekday : 'short'})
const DAY_FORMATTER_LONG = new Intl.DateTimeFormat(undefined, {weekday : 'long'})

// hor formater 
const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: 'numeric', hour12 : false })
export function getWeather(lat, lon, timezone) {

    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,weathercode,surface_pressure,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&timeformat=unixtime&timezone=${timezone}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return {
                current : parseCurrentWeather(data), 
                daily : parseDailyWeather(data), 
                hourly : parseHourlyWeather(data) 
            }
        })
}

function parseCurrentWeather({ current, daily }) {

    const {
        apparent_temperature : currentTemp,
        is_day : isDay, 
        precipitation : precip, 
        weathercode : weatherCode, 
        relativehumidity_2m : humidity, 
        windspeed_10m : windSpeed,
        surface_pressure : pressure, 
        
    } = current

    const {
        apparent_temperature_max : [maxTemp], 
        apparent_temperature_min : [minTemp], 
        sunrise : [sunrise], 
        sunset : [sunset], 
        uv_index_max : [uv]
    } = daily

    return {
        currentTemp : Math.round(currentTemp), 
        isDay, 
        precip : Math.round(precip * 100) / 100, 
        weatherCode, 
        humidity : Math.round(humidity * 100) / 100, 
        windSpeed : Math.round(windSpeed), 
        maxTemp : Math.round(maxTemp), 
        minTemp : Math.round(minTemp), 
        sunrise, 
        sunset, 
        pressure : Math.round(pressure), 
        uv : Math.round(uv)
    }

}


function parseDailyWeather({ daily }) {

    let restDays = daily.time.map((time, index) => {

        if (index > 1) {
            return {
                timestamp : time * 1000, 
                dayName :  DAY_FORMATTER_SHORT.format(time * 1000), 
                weatherCode : Math.round(daily.weathercode[index]), 
                maxTemp : Math.round(daily.temperature_2m_max[index]), 
                minTemp : Math.round(daily.temperature_2m_min[index])
            }
        }

    }) 

    return {
        "tomorrow" : {
            timestamp : daily.time[1] * 1000, 
            dayName :  DAY_FORMATTER_LONG.format(daily.time[1] * 1000), 
            weatherCode : daily.weathercode[1], 
            maxTemp : Math.round(daily.temperature_2m_max[1]), 
            minTemp : Math.round(daily.temperature_2m_min[1])
        }, 
        restDays : restDays.filter(item => item != undefined)
    }

}


function parseHourlyWeather({ hourly, current }) {

    return hourly.time.map((time, index) => {

        return {
            timestamp : time * 1000, 
            hour : HOUR_FORMATTER.format(time * 1000), 
            temperature : Math.round(hourly.apparent_temperature[index])
        }

    }).filter(({ timestamp }) => timestamp >= current.time * 1000)

}