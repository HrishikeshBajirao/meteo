import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import { apiCurrentRouter } from './routes/apiCurrentRoutes.js'
import { apiLocationSearchRouter } from './routes/apiLocationSearchRoutes.js'
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'

dotenv.config()
const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/current', apiCurrentRouter)
app.use('/api/location-search', apiLocationSearchRouter)

//route not found
app.use(notFound)
//centralized error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on ${port}`))