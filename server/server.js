import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import { sendWeatherData } from './utils/sendWeatherData.js'
import { apiCurrentRouter } from './routes/apiCurrentRoutes.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/current', apiCurrentRouter)

app.listen(port, () => console.log(`Server listening on ${port}`))