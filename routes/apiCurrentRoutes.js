import express from 'express'
import { cityPathParamReq, cityQueryParamReq, postSubmitReq } from '../controllers/apiCurrentControllers.js'

export const apiCurrentRouter = express.Router()

apiCurrentRouter.post('/submit', postSubmitReq)
apiCurrentRouter.get('/city/:cityname', cityPathParamReq)
apiCurrentRouter.get('/', cityQueryParamReq)