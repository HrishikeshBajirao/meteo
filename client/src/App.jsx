import { useState } from 'react'
import { SearchCard } from './components/SearchCard.jsx'
import { WeatherCard } from './components/WeatherCard.jsx'
import './index.css'

function App() {

  const [location, setLocation] = useState('')
  const [searched, setSearched] = useState(false)
  const [weatherData, setWeatherData] = useState('')

  return (
    <main className="app">
      <SearchCard
        location = {location}
        setLocation = {setLocation}
        setSearched = {setSearched}
        setWeatherData = {setWeatherData}
      />

      <WeatherCard
        searched = {searched}
        weatherData = {weatherData}
      />
    </main>
  )
}

export default App
