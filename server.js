import http from 'node:http'
import dotenv from "dotenv";
dotenv.config();
import { sendWeatherData } from './utils/sendWeatherData.js'
import { sendResponse } from './utils/sendResponse.js'
import { getTemperatureApiResponse } from './data/apiResponseExample.js'

const port = process.env.PORT

const server = http.createServer(async (req, res) => {

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryParams = Object.fromEntries(urlObj.searchParams)

    //query params
    if(urlObj.pathname === '/api' && req.method === 'GET'){
        
        const cityName = queryParams.city?.trim()

        //handle empty city name request - 400 Bad request
        if(!cityName){
            return sendResponse(res, 400, 'application/json', {
                message: "Bad Request - City Name cannot be empty!"
            })
        }
        await sendWeatherData(res, cityName)

    }//path params
    else if(req.url.startsWith('/api/city') && req.method === 'GET'){

        const cityName = req.url.split('/').pop();
        await sendWeatherData(res, cityName)

    }//bad req.url
    else{
        sendResponse(res, 404, 'application/json', {message: 'oops, endpoint does not exist '})
    }
});

server.listen(port, () => console.log(`server listening on ${port}`))