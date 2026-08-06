import { getCurrentByCityName } from './getData.js'

const weatherCard = document.getElementById('weatherCard')
const formEl = document.getElementById('weatherForm')

const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formEl);
    const location = formData.get("location")
    const data = await getCurrentByCityName(location)

    const weatherData = {
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

    weatherCard.classList.remove('hidden')

    weatherCard.innerHTML = `
        <div class="weather-card__top">
        <div>
          <p class="section-label">Location</p>
          <h2 id="locationValue" class="empty-value empty-value--title">${weatherData.location}</h2>
        </div>

        <div>
          <p class="section-label">Time</p>
          <p id="timeValue" class="empty-value">${weatherData.time}</p>
        </div>
      </div>

      <div class="main-weather">
        <div>
          <p class="section-label">Temperature</p>
          <p id="temperatureValue" class="empty-value empty-value--temp">${weatherData.temperature}</p>
        </div>

        <div>
          <p class="section-label">Day Status</p>
          <p id="isDayValue" class="empty-value">${weatherData.day_night}</p>
        </div>
      </div>

      <div class="weather-grid">
        <div class="weather-item">
          <span>Latitude</span>
          <p id="latValue" class="empty-value">${weatherData.lat}</p>
        </div>

        <div class="weather-item">
          <span>Longitude</span>
          <p id="lonValue" class="empty-value">${weatherData.lon}</p>
        </div>

        <div class="weather-item">
          <span>Interval</span>
          <p id="intervalValue" class="empty-value">${weatherData.interval}</p>
        </div>

        <div class="weather-item">
          <span>Humidity</span>
          <p id="humidityValue" class="empty-value">${weatherData.humidity}</p>
        </div>

        <div class="weather-item">
          <span>Precipitation</span>
          <p id="precipitationValue" class="empty-value">${weatherData.precipitation}</p>
        </div>

        <div class="weather-item">
          <span>Rain</span>
          <p id="rainValue" class="empty-value">${weatherData.rain}</p>
        </div>

        <div class="weather-item">
          <span>Wind Speed</span>
          <p id="windSpeedValue" class="empty-value">${weatherData.windSpeed}</p>
        </div>

        <div class="weather-item">
          <span>Wind Direction</span>
          <p id="windDirectionValue" class="empty-value">${weatherData.windDirection}</p>
        </div>

        <div class="weather-item">
          <span>Pressure</span>
          <p id="pressureValue" class="empty-value">${weatherData.pressure}</p>
        </div>
      </div>
    `

}

formEl.addEventListener('submit', handleFormSubmit)