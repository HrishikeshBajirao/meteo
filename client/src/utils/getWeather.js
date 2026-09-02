export async function getCurrentByCityName(location){

    console.log(location)//

    const response = await fetch('http://localhost:8000/api/current/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({location})
    })

    const data = await response.json();

    if(!response.ok){
        const error = new Error(
            data?.error?.message || "Unable to fetch weather"
        )
        error.status = response.status
        error.code = data?.error?.code || "WEATHER_REQUEST_FAILED"

        throw error;
    }

    return data;
}