import { sendWeatherData } from '../utils/sendWeatherData.js'

export async function cityQueryParamController(req, res){

    const cityName = req.query.city.trim()
    //handle empty city name request - 400 Bad request
    if(!cityName || typeof cityName !== 'string'){
        res.status(400).json({message: "Bad Request - Invalid or empty cityName"})
    }
    await sendWeatherData(res, cityName)

}

export async function cityPathParamController(req, res){

    const cityName = req.params.cityname
    //handle empty city name request - 400 Bad request
    if(!cityName || typeof cityName !== 'string'){
        res.status(400).json({message: "Bad Request - Invalid or empty cityName"})
    }
    await sendWeatherData(res, cityName)

}