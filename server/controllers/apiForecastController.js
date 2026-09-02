import { getDailyForecast, getHourlyForecast } from '../services/weatherService.js'

export async function dailyForecastHandler(req, res, next){

    try{
        const dailyForecastData = await getDailyForecast(req.query.location)
        res.status(200).send(dailyForecastData)
    } catch(error) {
        next(error)
    }

}

export async function hourlyForecastHandler(req, res, next){

    try{
        const hourlyForecastData = await getHourlyForecast(req.query.location, req.query.date)
        res.status(200).send(hourlyForecastData)
    } catch(error) {
        next(error)
    }
        
}