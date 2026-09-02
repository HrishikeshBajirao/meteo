export async function fetchSuggestions(debouncedLocation){
    const url = new URL(`${import.meta.env.VITE_API_BASE_URL}/api/location-search`)
    url.searchParams.set('q', debouncedLocation)

    const response = await fetch(url)
    const data = await response.json()

    if(!response.ok){
        const error = new Error(
            data?.error?.message || "Unable to fetch weather"
        )
        error.status = response.status
        error.code = data?.error?.code || "WEATHER_REQUEST_FAILED"

        throw error
    }

    return data
}