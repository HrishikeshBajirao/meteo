import { useState } from 'react'
import { SearchCard } from './components/SearchCard.jsx'
import { WeatherCard } from './components/WeatherCard.jsx'
import { WeatherCardSkeleton } from './components/WeatherCardSkeleton.jsx'
import './index.css'

function App() {

  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <main className="app">
      <SearchCard
        location = {location}
        setLocation = {setLocation}
        setSearched = {setSearched}
        setWeatherData = {setWeatherData}
        setLoading = {setLoading}
        error = {error}
        setError = {setError}
      />

      {loading && !error && <WeatherCardSkeleton />}

      {!loading && !error && searched && <WeatherCard
        weatherData = {weatherData}
      />}
      
    </main>
  )
}

export default App
