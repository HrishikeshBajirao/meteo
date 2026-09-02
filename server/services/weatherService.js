import { getCoordinatesAPI, getWeatherAPI, getDailyForecastAPI, getHourlyForecastAPI } from './getDataFromAPI.js'

export async function getWeatherData(location){

    const coords = await getCoordinatesAPI(location, 1)

    const lat = coords[0].lat
    const lon = coords[0].lon
    const name = coords[0].name
        
    const weatherData = await getWeatherAPI(lat, lon)

    const weatherObj = Object.fromEntries(
        Object.entries(weatherData.current).map(([key, value]) => [
            key, { value: value, unit: weatherData.current_units[key] }
        ])
    )

    const content = {location: name, lat, lon, ...weatherObj}
    
    return content

}

export async function getDailyForecast(location){
    const coords = await getCoordinatesAPI(location, 1)

    const lat = coords[0].lat
    const lon = coords[0].lon
    const name = coords[0].name

    const dailyForecastData = await getDailyForecastAPI(lat, lon)

    const forecastObj = Object.fromEntries(
        Object.entries(dailyForecastData.daily).map(([key, value]) => [
            key, { unit: dailyForecastData.daily_units[key], value: value }
        ])
    )

    const content = {location: name, lat, lon, ...forecastObj}
    
    return content
}

export async function getHourlyForecast(location, date){
    const coords = await getCoordinatesAPI(location, 1)

    const lat = coords[0].lat
    const lon = coords[0].lon
    const name = coords[0].name

    const hourlyForecastData = await getHourlyForecastAPI(lat, lon, date)

    const forecastObj = Object.fromEntries(
        Object.entries(hourlyForecastData.hourly).map(([key, value]) => [
            key, { unit: hourlyForecastData.hourly_units[key], value: value }
        ])
    )

    const content = {location: name, lat, lon, ...forecastObj}
    
    return content
}