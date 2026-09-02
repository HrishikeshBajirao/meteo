import express from 'express'
import { validateLocation } from '../middleware/validateInputs.js'
import { locationPathParamReq, locationQueryParamReq, postSubmitReq } from '../controllers/apiCurrentControllers.js'

export const apiCurrentRouter = express.Router()

apiCurrentRouter.post('/submit', validateLocation('body', 'location'), postSubmitReq)
apiCurrentRouter.get('/:location', validateLocation('params', 'location'), locationPathParamReq)
apiCurrentRouter.get('/', validateLocation('query', 'location'), locationQueryParamReq)