import { sendResponse } from '../utils/sendResponse.js'
import { sendWeatherData } from '../utils/sendWeatherData.js'

export async function cityQueryParamController(req, res){

    const cityName = req.query.city
    //handle empty city name request - 400 Bad request
    if(!cityName){
        return sendResponse(res, 400, 'application/json', {
            message: "Bad Request - City Name cannot be empty!"
        })
    }
    await sendWeatherData(res, cityName)

}

export async function cityPathParamController(req, res){

    const cityName = req.params.cityname
    //handle empty city name request - 400 Bad request
    if(!cityName){
        return sendResponse(res, 400, 'application/json', {
            message: "Bad Request - City Name cannot be empty!"
        })
    }
    await sendWeatherData(res, cityName)

}