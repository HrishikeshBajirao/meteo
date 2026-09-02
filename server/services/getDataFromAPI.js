export const getCoordinatesAPI = async (cityName, limit) => {
    const API_KEY = process.env.GEOCODING_API_KEY
    const url = new URL('https://api.openweathermap.org/geo/1.0/direct')
    url.searchParams.set('q', cityName)
    url.searchParams.set('limit', limit)
    url.searchParams.set('appid', API_KEY)

    try{
        const response = await fetch(url)    

        if(!response.ok){

            const error = new Error("Geocoding service failed")
            error.statusCode = 502
            error.code = 'GEOCODING_API_ERROR'

            throw error

        }

        const coords = await response.json()

        //if returned coords is empty throw 404 - location not found
        if(coords.length === 0){

            const error = new Error("Location not found")
            error.statusCode = 404
            error.code = "LOCATION_NOT_FOUND"

            throw error

        }

        return coords

    } catch(err) {

        // if an error is thrown in the try block then throw that err
        if(err.statusCode){
            throw err
        }

        const error = new Error("Unable to reach Geocoding service")
        error.statusCode = 502
        error.code = "GEOCODING_API_UNAVAILABLE"

        throw error

    }
}

export const getWeatherAPI = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,rain,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,pressure_msl&timezone=auto`

    try{
        const response = await fetch(url)

        if(!response.ok){

            const error = new Error("Weather service failed")
            error.statusCode = 502
            error.code = 'WEATHER_API_ERROR'

            throw error

        }

        const data = await response.json()
        return data

    } catch(err) {

        // if an error is thrown in the try block then throw that err
        if(err.statusCode){
            throw err
        }

        const error = new Error("Unable to reach Weather Service")
        error.statusCode = 502
        error.code = "WEATHER_API_UNAVAILABLE"

        throw error

    }
}

export const getDailyForecastAPI = async (lat, lon) => {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code,rain_sum,precipitation_sum,precipitation_hours&timezone=auto`

    try{
        const response = await fetch(url)

        if(!response.ok){

            const error = new Error("Weather service failed")
            error.statusCode = 502
            error.code = 'WEATHER_API_ERROR'

            throw error

        }

        const data = await response.json()
        return data

    } catch(err) {

        // if an error is thrown in the try block then throw that err
        if(err.statusCode){
            throw err
        }

        const error = new Error("Unable to reach Weather Service")
        error.statusCode = 502
        error.code = "WEATHER_API_UNAVAILABLE"

        throw error

    }
}



export const getHourlyForecastAPI = async (lat, lon, date) => {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,precipitation,wind_speed_10m,relative_humidity_2m,apparent_temperature&timezone=auto&end_date=${date}&start_date=${date}`

    try{
        const response = await fetch(url)

        if(!response.ok){

            const error = new Error("Weather service failed")
            error.statusCode = 502
            error.code = 'WEATHER_API_ERROR'

            throw error

        }

        const data = await response.json()
        return data

    } catch(err) {

        // if an error is thrown in the try block then throw that err
        if(err.statusCode){
            throw err
        }

        const error = new Error("Unable to reach Weather Service")
        error.statusCode = 502
        error.code = "WEATHER_API_UNAVAILABLE"

        throw error

    }
}


export const getAutocompleteSuggestions = async (str) => {
    const API_KEY=process.env.GEOAPIFY_AUTOCOMPLETE_API_KEY
    const url = new URL("https://api.geoapify.com/v1/geocode/autocomplete")
    url.searchParams.set('text', str)
    url.searchParams.set('apiKey', API_KEY)
    url.searchParams.set('type', 'locality')
    url.searchParams.set('lang', 'en')

    try{
        const response = await fetch(url)

        if(!response.ok){

            const error = new Error("Geoapify Autocomplete service failed")
            error.statusCode = 502
            error.code = 'GEOAPIFY_AUTOCOMPLETE_ERROR'

            throw error

        }

        const data = await response.json()
        
        const suggestions = data.features.map((item) => (
            {
                name: item.properties.name, 
                state: item.properties.state, 
                country: item.properties.country
            }
        ))

        return suggestions

    } catch (err) {

        if(err.statusCode){
            throw err
        }

        const error = new Error("Unable to reach Geoapify Autocomplete service")
        error.statusCode = 502
        error.code = 'GEOAPIFY_AUTOCOMPLETE_SERVICE_UNAVAILABLE'

        throw error

    }
}
