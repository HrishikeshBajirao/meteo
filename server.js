import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import dotenv from "dotenv";
dotenv.config();
import { sendWeatherData } from './utils/sendWeatherData.js'
import { sendResponse } from './utils/sendResponse.js'
import { getTemperatureApiResponse } from './data/apiResponseExample.js'
import { getContentType } from './utils/getContentType.js'

const port = process.env.PORT

const server = http.createServer(async (req, res) => {

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryParams = Object.fromEntries(urlObj.searchParams)
    res.setHeader('Access-Control-Allow-Origin', '*')


    //query params
    if(urlObj.pathname === '/api'){
        
        const cityName = queryParams.city?.trim()

        //handle empty city name request - 400 Bad request
        if(!cityName){
            return sendResponse(res, 400, 'application/json', {
                message: "Bad Request - City Name cannot be empty!"
            })
        }
        await sendWeatherData(res, cityName)

    }//path params
    else if(req.url.startsWith('/api/city')){

        const cityName = req.url.split('/').pop();
        await sendWeatherData(res, cityName)

    }//serve static if req.url does not start with /api
    else if(req.method === 'GET'){

        const pathToResource = path.join('public', req.url === '/' ? 'index.html' : req.url)
        const ext = path.extname(pathToResource)
        const contentType = getContentType(ext)
        try {
            const content = await fs.readFile(pathToResource)
            sendResponse(res, 200, contentType, content)
        } catch (err) {
            if(err.code === "ENOENT"){
                return sendResponse(res, 404, "text/html", "<h1>404 - File Not Found</h1>")
            }
            else{
                return sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`)
            }
        }
    }
});

server.listen(port, () => console.log(`server listening on ${port}`))