import { getAutocompleteSuggestions } from '../services/getDataFromAPI.js'

export async function locationSearchController(req, res, next){    

    try{

        const response = await getAutocompleteSuggestions(req.query?.q.trim())
        res.status(200).send(response)

    } catch (err) {

        next(err)

    }

}