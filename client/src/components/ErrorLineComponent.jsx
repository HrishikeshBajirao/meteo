export function ErrorLineComponent({error}){

    let errorMessage

    if(error.code === "INVALID_LOCATION"){
        errorMessage = "The location name has invalid characters."
    }
    else if(error.code === "LOCATION_NOT_FOUND"){
        errorMessage = "Location not found."
    }
    else{
        errorMessage = "Oh no! Server is unavailable, try again later"
    }

    return (
        <div className="error-line">
            {errorMessage}
        </div>
    )
}