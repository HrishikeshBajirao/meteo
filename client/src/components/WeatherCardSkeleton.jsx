export function WeatherCardSkeleton(){

    return (
        <section className="weather-card" id="weatherCard" aria-live="polite">
        <div className="weather-card__top">
          <div>
            <p className="section-label">Location</p>
            <h2 id="locationValue" className="empty-value empty-value--title"></h2>
          </div>
  
          <div>
            <p className="section-label">Time</p>
            <p id="timeValue" className="empty-value"></p>
          </div>
        </div>
  
        <div className="main-weather">
          <div>
            <p className="section-label">Temperature</p>
            <p id="temperatureValue" className="empty-value empty-value--temp"></p>
          </div>
  
          <div>
            <p className="section-label">Day Status</p>
            <p id="isDayValue" className="empty-value"></p>
          </div>
        </div>
  
        <div className="weather-grid">
          <div className="weather-item">
            <span>Latitude</span>
            <p id="latValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Longitude</span>
            <p id="lonValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Interval</span>
            <p id="intervalValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Humidity</span>
            <p id="humidityValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Precipitation</span>
            <p id="precipitationValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Rain</span>
            <p id="rainValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Wind Speed</span>
            <p id="windSpeedValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Wind Direction</span>
            <p id="windDirectionValue" className="empty-value"></p>
          </div>
  
          <div className="weather-item">
            <span>Pressure</span>
            <p id="pressureValue" className="empty-value"></p>
          </div>
        </div>
      </section>
    )
}