import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { getCurrentByCityName } from '../utils/getWeather.js'
import { SuggestionsDropdown } from './SuggestionsDropdown'
import { fetchSuggestions } from '../utils/getSuggestions.js'

export function SearchCard({location, setLocation, setSearched, setWeatherData}){

    const [suggestions, setSuggestions] = useState([])
    const [locationSelected, setLocationSelected] = useState(false)
    const debouncedLocation = useDebounce(location, 300)

    useEffect(() => {

        if(locationSelected){
            return
        }

        if(!debouncedLocation.trim()){
            return;
        }

        async function getSuggestions() {
            const suggestions = await fetchSuggestions(debouncedLocation)
            setSuggestions(suggestions)
        }

        getSuggestions()

    }, [debouncedLocation, locationSelected])

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        //if suggestions is not empty then use the cityname from the first item of the suggestions array
        let cityName = location
        if(suggestions.length > 0){
            cityName = suggestions[0].name
            setLocation(`${suggestions[0].name}, ${suggestions[0].state}, ${suggestions[0].country}`)
        }

        const data = await getCurrentByCityName(cityName)
        setSearched(true)
        setSuggestions([])
        setLocationSelected(true)
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
        <section className="search-card">
            <h1>Weather App</h1>
            <p>Simple frontend to display weather data from your backend.</p>

            <form id="weatherForm" className="search-form" autoComplete="off"
            onSubmit={handleFormSubmit}>
                <label className="sr-only" htmlFor="locationInput">Location</label>
                <input
                    type="text"
                    id="locationInput"
                    name="location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                        setLocationSelected(false)
                    }}
                    placeholder="Enter city name"
                    required
                />
                <button type="submit">Search</button>
            </form>

            <SuggestionsDropdown
                setLocation = {setLocation}
                suggestions = {suggestions}
                setSuggestions = {setSuggestions}
                setSearched = {setSearched}
                setWeatherData = {setWeatherData}
                locationSelected = {locationSelected}
                setLocationSelected = {setLocationSelected}
            />

        </section>
    )

}