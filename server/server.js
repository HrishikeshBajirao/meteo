import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import { sendWeatherData } from './services/weatherService.js'
import { apiCurrentRouter } from './routes/apiCurrentRoutes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()
const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/current', apiCurrentRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on ${port}`))