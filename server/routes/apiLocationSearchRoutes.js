import express from 'express'
import { locationSearchController } from '../controllers/apiLocationSearchControllers.js'
import { validateLocation } from '../middleware/validateInputs.js'

export const apiLocationSearchRouter = express.Router()

apiLocationSearchRouter.get('/', validateLocation('query', 'q'), locationSearchController)