import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { getCurrentByCityName } from '../utils/getWeather.js'
import { SuggestionsDropdown } from './SuggestionsDropdown'
import { fetchSuggestions } from '../utils/getSuggestions.js'

export function SearchCard({location, setLocation, setSearched, setWeatherData}){

    const [suggestions, setSuggestions] = useState([])
    const [locationSelected, setLocationSelected] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const debouncedLocation = useDebounce(location, 300)

    //debounce input to capture while user is typing
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

    //handle when input form is submitted by hitting enter or clicking hte "Search" submit button
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

    //handle key events on the input element
    const handleKeyDownOnInput = (e) => {
        
        // if dropdown is empty then return
        if(suggestions.length === 0){
            return
        }

        if(e.key === "ArrowDown"){
            e.preventDefault()

            setHighlightedIndex((currIndex) => {
                if(currIndex < suggestions.length - 1){
                    return currIndex + 1
                }

                return 0
            })
        }

        if(e.key === "ArrowUp"){
            e. preventDefault()

            setHighlightedIndex((currIndex) => {
                if(currIndex > 0){
                    return currIndex - 1
                }
                return suggestions.length - 1
            })
        }

        if (e.key === "Enter" && highlightedIndex >= 0) {
            e.preventDefault()

            const selected = suggestions[highlightedIndex]
            handleSuggestionClick(selected)
        }
    }

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
                        const value = e.target.value

                        setLocation(value)
                        setLocationSelected(false)

                        if(!value.trim()){
                            setSuggestions([])
                            setHighlightedIndex(-1)
                        }
                    }}
                    onKeyDown={handleKeyDownOnInput}
                    placeholder="Enter city name"
                    required
                />
                <button type="submit">Search</button>
            </form>

            <SuggestionsDropdown
                handleSuggestionClick = {handleSuggestionClick}
                suggestions = {suggestions}
                locationSelected = {locationSelected}
                highlightedIndex = {highlightedIndex}
            />

        </section>
    )

}