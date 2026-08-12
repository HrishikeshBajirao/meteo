import { getWeatherData } from '../services/weatherService.js'

export async function locationQueryParamReq(req, res, next){
    
    try {

        const weatherData = await getWeatherData(req.query.location)
        res.status(200).json(weatherData)

    } catch (err) {

        next(err)

    }
}

export async function locationPathParamReq(req, res, next){
    
    try {

        const weatherData = await getWeatherData(req.params.location)
        res.status(200).json(weatherData)

    } catch (err) {

        next(err)

    }
}

export async function postSubmitReq(req, res, next){
    
    try {

        const weatherData = await getWeatherData(req.body.location)
        res.status(200).json(weatherData)

    } catch (err) {

        next(err)

    }
}