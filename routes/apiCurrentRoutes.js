import express from 'express'
import { cityPathParamController, cityQueryParamController } from '../controllers/apiCurrentControllers.js'

export const apiCurrentRouter = express.Router()

apiCurrentRouter.get('/city/:cityname', cityPathParamController)
apiCurrentRouter.get('/', cityQueryParamController)