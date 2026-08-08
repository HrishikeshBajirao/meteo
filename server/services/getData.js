export const getCoordinates = async (cityName) => {
    const API_KEY = process.env.GEOCODING_API_KEY
    const url = new URL('https://api.openweathermap.org/geo/1.0/direct')
    url.searchParams.set('q', cityName)
    url.searchParams.set('limit', '1')
    url.searchParams.set('appid', API_KEY)

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
