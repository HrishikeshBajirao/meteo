import { getAutocompleteSuggestions } from '../services/getDataFromAPI.js'

export async function locationSearchController(req, res, next){

    console.log('location-search route working')
    
    const searchStr = req.query?.q.trim();

    const response = await getAutocompleteSuggestions(searchStr)
    
    res.send(response)

}