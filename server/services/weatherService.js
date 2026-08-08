import { getCoordinates, getTemperature } from './getData.js'

export async function sendWeatherData(location){

    const coords = await getCoordinates(location)

    //if returned coords is empty throw 404 - location not found
    if(coords.length === 0){

        const error = new Error("Location not found")
        error.statusCode = 404
        error.code = "LOCATION_NOT_FOUND"

        throw error

    }

    const lat = coords[0].lat
    const lon = coords[0].lon
    const name = coords[0].name
        
    const weatherData = await getTemperature(lat, lon)

    const weatherObj = Object.fromEntries(
        Object.entries(weatherData.current).map(([key, value]) => [
            key, { value: value, unit: weatherData.current_units[key] }
        ])
    )

    const content = {location: name, lat, lon, ...weatherObj}
    
    return content

}