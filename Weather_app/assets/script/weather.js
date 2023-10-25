export function getWeather(lat, lon, timezone) {

    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,weathercode,surface_pressure,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&timeformat=unixtime&timezone=${timezone}`)

}