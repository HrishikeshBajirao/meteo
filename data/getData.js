export const getCoordinates = async (cityName) => {
    const API_KEY = process.env.GEOCODING_API_KEY
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const getTemperature = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,rain,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,pressure_msl`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const getWeatherData = async () => {
    const API_KEY = process.env.VISUAL_CROSSING_API_KEY
    const base_url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/last30days?key=UHNCJR8CNDZZUZ2B2CGFXQLPN&include=days`)
    const data = await response.json()
    return data
}
