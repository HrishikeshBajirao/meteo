export function validateLocation(source, ...key){

    return function (req, res, next){

        //handle unknown or wrong/invalid query parameter used
        const allowedKeys = [...key]

        const unknownKeys = Object.keys(req[source])
            .filter(param => !allowedKeys.includes(param))

        if(unknownKeys.length > 0){

            const error = new Error(`Unknown query parameter: ${unknownKeys[0]}`)
            error.statusCode = 400
            error.code = "UNKNOWN_QUERY_PARAMETER"

            return next(error)

        }

        //extract location value from params
        const location = req[source][key[0]]?.trim()

        //handle missing location name - 400 Bad request
        if(!location){

            const error = new Error("Location parameter is required")
            error.statusCode = 400
            error.code = "MISSING_LOCATION"

            return next(error)

        }

        //handle empty location name - 400 Bad request
        if(location.trim() === ""){

            const error = new Error("Location parameter cannot be empty")
            error.statusCode = 400
            error.code = "EMPTY_LOCATION"

            return next(error)

        }

        //handle invalid location name
        if(!/^[a-zA-Z\s,.]+$/.test(location)){

            const error = new Error("Location name contains invalid characters")
            error.statusCode = 400
            error.code = "INVALID_LOCATION"

            return next(error)

        }

        next()
    }

}

export function validateDate(source, ...key){
    
    return function (req, res, next){
        //handle unknown or wrong/invalid query parameter used
        const allowedKeys = [...key]

        const unknownKeys = Object.keys(req[source])
            .filter(param => !allowedKeys.includes(param))

        if(unknownKeys.length > 0){

            const error = new Error(`Unknown query parameter: ${unknownKeys[0]}`)
            error.statusCode = 400
            error.code = "UNKNOWN_QUERY_PARAMETER"

            return next(error)

        }

        //extract date value from params
        const date = req[source][key[1]]?.trim()
        
        //handle invalid date inputs
        if(!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date)){

            const error = new Error("Invalid Date Format: Make sure date format is YYYY-MM-DD")
            error.statusCode = 400
            error.code = "INVALID_DATE"

            return next(error)
        }

        next()
    }

}