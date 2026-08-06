import { getCoordinates, getTemperature } from '../data/getData.js'

export async function sendWeatherData(res, cityName){
    try{
        const coords = await getCoordinates(cityName)

        //if coords is empty
        if(coords.length === 0){
            return sendResponse(res, 404, 'application/json', {error: "city not found"})
        }

        const lat = coords[0].lat
        const lon = coords[0].lon
        const location = coords[0].name
            
        const weatherData = await getTemperature(lat, lon)

        const weatherObj = Object.fromEntries(
            Object.entries(weatherData.current).map(([key, value]) => [
                key, { value: value, unit: weatherData.current_units[key] }
            ])
        )

        const content = {location, lat, lon, ...weatherObj}
        console.log(content)
        res.status(200).json(content);
    } catch (err) {
        console.log(`Server down: ${err}`)
        res.status(500).json({error:"Internal Server Error"});
    }
}