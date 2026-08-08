import express from 'express'
import { locationPathParamReq, locationQueryParamReq, postSubmitReq } from '../controllers/apiCurrentControllers.js'
import { validateLocation } from '../middleware/validateInputs.js'

export const apiCurrentRouter = express.Router()

apiCurrentRouter.post('/submit', validateLocation('body', 'location'), postSubmitReq)
apiCurrentRouter.get('/:location', validateLocation('params', 'location'), locationPathParamReq)
apiCurrentRouter.get('/', validateLocation('query', 'location'), locationQueryParamReq)