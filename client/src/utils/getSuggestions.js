export async function fetchSuggestions(debouncedLocation){
    const url = new URL('/api/location-search', window.location.origin)
    url.searchParams.set('q', debouncedLocation)

    try{
        const response = await fetch(url)

        if(!response.ok){
            const errorBody = await response.text().catch(() => '');
            throw new Error(`Request failed with status ${response.status}: ${errorBody}`);
        }

        const data = await response.json()
        return data
    } catch (err) {
        if(!err.status){
            err.message = 'Network error, please check your connection.'
        }
        console.error("Error fetching autocomplete suggestions", err)
        throw err
    }
}