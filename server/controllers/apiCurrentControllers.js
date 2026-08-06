import { sendWeatherData } from '../utils/sendWeatherData.js'

export async function cityQueryParamReq(req, res){

    const cityName = req.query.city.trim()
    //handle empty city name request - 400 Bad request
    if(!cityName || typeof cityName !== 'string'){
        res.status(400).json({message: "Bad Request - Invalid or empty cityName"})
    }
    //send data
    await sendWeatherData(res, cityName)

}

export async function cityPathParamReq(req, res){

    const cityName = req.params.cityname
    //handle empty city name request - 400 Bad request
    if(!cityName || typeof cityName !== 'string'){
        res.status(400).json({message: "Bad Request - Invalid or empty cityName"})
    }
    //send data
    await sendWeatherData(res, cityName)

}

export async function postSubmitReq(req, res){
    const cityName = req.body.cityname
    //handle empty city name request - 400 Bad request
    if(!cityName || typeof cityName !== 'string'){
        res.status(400).json({message: "Bad Request - Invalid or empty cityName"})
    }
    //send data
    await sendWeatherData(res, cityName)
}