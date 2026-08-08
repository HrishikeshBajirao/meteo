import { useState } from 'react'
import { getCurrentByCityName } from './utils/getWeather.js'
import './index.css'

function App() {

  const [location, setLocation] = useState('')
  const [searched, setSearched] = useState(false)
  const [weatherData, setWeatherData] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = await getCurrentByCityName(location)
    console.log(data)
    setSearched(true)
    setWeatherData({
      ...weatherData,
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
    })
  }

  return (
    <main className="app">
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
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city name"
            required
          />
          <button type="submit">Search</button>
        </form>
      </section>

      <section className={`weather-card ${searched ? "" : "hidden"}`} id="weatherCard" aria-live="polite">
        <div className="weather-card__top">
          <div>
            <p className="section-label">Location</p>
            <h2 id="locationValue" className="empty-value empty-value--title">{weatherData.location}</h2>
          </div>
  
          <div>
            <p className="section-label">Time</p>
            <p id="timeValue" className="empty-value">{weatherData.time}</p>
          </div>
        </div>
  
        <div className="main-weather">
          <div>
            <p className="section-label">Temperature</p>
            <p id="temperatureValue" className="empty-value empty-value--temp">{weatherData.temperature}</p>
          </div>
  
          <div>
            <p className="section-label">Day Status</p>
            <p id="isDayValue" className="empty-value">{weatherData.day_night}</p>
          </div>
        </div>
  
        <div className="weather-grid">
          <div className="weather-item">
            <span>Latitude</span>
            <p id="latValue" className="empty-value">{weatherData.lat}</p>
          </div>
  
          <div className="weather-item">
            <span>Longitude</span>
            <p id="lonValue" className="empty-value">{weatherData.lon}</p>
          </div>
  
          <div className="weather-item">
            <span>Interval</span>
            <p id="intervalValue" className="empty-value">{weatherData.interval}</p>
          </div>
  
          <div className="weather-item">
            <span>Humidity</span>
            <p id="humidityValue" className="empty-value">{weatherData.humidity}</p>
          </div>
  
          <div className="weather-item">
            <span>Precipitation</span>
            <p id="precipitationValue" className="empty-value">{weatherData.precipitation}</p>
          </div>
  
          <div className="weather-item">
            <span>Rain</span>
            <p id="rainValue" className="empty-value">{weatherData.rain}</p>
          </div>
  
          <div className="weather-item">
            <span>Wind Speed</span>
            <p id="windSpeedValue" className="empty-value">{weatherData.windSpeed}</p>
          </div>
  
          <div className="weather-item">
            <span>Wind Direction</span>
            <p id="windDirectionValue" className="empty-value">{weatherData.windDirection}</p>
          </div>
  
          <div className="weather-item">
            <span>Pressure</span>
            <p id="pressureValue" className="empty-value">{weatherData.pressure}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
