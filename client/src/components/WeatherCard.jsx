export function WeatherCard({searched, weatherData}){

    return (
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
    )
}