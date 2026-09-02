import express from "express"
import { validateLocation } from '../middleware/validateInputs.js'
import { dailyForecastHandler, hourlyForecastHandler } from '../controllers/apiForecastController.js'

export const apiForecastRouter = express.Router();

apiForecastRouter.get('/daily', validateLocation("query", "location"), dailyForecastHandler)
apiForecastRouter.get('/hourly', validateLocation("query", "location", "date"), hourlyForecastHandler)