import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import { apiCurrentRouter } from './routes/apiCurrentRoutes.js'
import { apiLocationSearchRouter } from './routes/apiLocationSearchRoutes.js'
import { apiForecastRouter } from './routes/apiForecastRoutes.js'
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'

dotenv.config()
const PORT = process.env.PORT || 8001

const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://hrishikeshbajirao.github.io"
    ]
}));
app.use(express.json())

app.use('/api/current', apiCurrentRouter)
app.use('/api/location-search', apiLocationSearchRouter)
app.use('/api/forecast', apiForecastRouter)

//route not found
app.use(notFound)
//centralized error handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))