import express from 'express'
import { locationSearchController } from '../controllers/apiLocationSearchControllers.js'

export const apiLocationSearchRouter = express.Router()

apiLocationSearchRouter.get('/', locationSearchController)