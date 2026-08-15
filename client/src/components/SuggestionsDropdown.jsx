import { getCurrentByCityName } from '../utils/getWeather.js'

export function SuggestionsDropdown({setLocation, suggestions, setSuggestions, 
    locationSelected, setLocationSelected, setSearched, setWeatherData}){

    //handle click on the suggestion dropdown item
    const handleSuggestionClick = async (suggestion) => {
        const data = await getCurrentByCityName(suggestion.name)
        setLocationSelected(true)
        setSuggestions([])
        setSearched(true)
        setLocation(`${suggestion.name}, ${suggestion.state}, ${suggestion.country}`)
        setWeatherData((currData) => {
            return {
                ...currData,
                location: data.location,
                time: data.time.value.split('T').pop(),
                temperature: data.temperature_2m.value + data.temperature_2m.unit,
                day_night: data.is_day.value ? "Day" : "Night",
                lat: data.lat,
                lon: data.lon,
                interval: data.interval.value / 60 + ' mins',
                humidity: data.relative_humidity_2m.value + data.relative_humidity_2m.value,
                precipitation: data.precipitation.value + data.precipitation.unit,
                rain: data.rain.value + data.rain.unit,
                windSpeed: data.wind_speed_10m.value + data.wind_speed_10m.unit,
                windDirection: data.wind_direction_10m.value + data.wind_direction_10m.unit,
                pressure: data.pressure_msl.value + data.pressure_msl.unit
            }
        })
    }

    return (
        <div className={`suggestion-dropdown ${locationSelected ? "hidden" : ""}`}>
            {suggestions.map((suggestion) => <button key={suggestion.name + suggestion.state} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.name}, {suggestion.state}, {suggestion.state}</button>)
            }
        </div>
    )

}