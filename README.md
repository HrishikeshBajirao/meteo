# ☁️ Nimbus

Nimbus is a lightweight Node.js backend service that aggregates weather data from external APIs and exposes a clean, developer-friendly REST API.

Built from scratch using Node.js' native HTTP module, the project serves as a learning exercise in backend development, API integration, and scalable project architecture.

---

## Features

### Current

- 🌍 Search weather by city name
- 📍 Automatic geocoding
- 🌤️ Current weather information
- 📦 Clean JSON API responses
- ⚠️ Basic error handling
- 🔐 Environment variable configuration

---

### Planned

- ⚡ Response caching
- 🚀 Express.js migration
- 🌐 Simple frontend
- 📅 Weather forecasts
- 📊 Data visualizations
- 💾 Search history & favorites
- 🌙 Astronomical & ephemeris data

---

## API Endpoints

### Query Parameter

```
GET /api?city=Mumbai
```

### Path Parameter

```
GET /api/city/Mumbai
```

### Example Response

```json
{
    "lat": 18.9733536,
    "lon": 72.82810491917377,
    "time": {
        "value": "2026-08-01T13:45",
        "unit": "iso8601"
    },
    "interval": {
        "value": 900,
        "unit": "seconds"
    },
    "temperature_2m": {
        "value": 27.8,
        "unit": "°C"
    },
    "precipitation": {
        "value": 0.2,
        "unit": "mm"
    },
    "rain": {
        "value": 0.1,
        "unit": "mm"
    },
    "relative_humidity_2m": {
        "value": 84,
        "unit": "%"
    },
    "is_day": {
        "value": 0,
        "unit": ""
    },
    "wind_speed_10m": {
        "value": 26.6,
        "unit": "km/h"
    },
    "wind_direction_10m": {
        "value": 261,
        "unit": "°"
    },
    "pressure_msl": {
        "value": 1002.3,
        "unit": "hPa"
    }
}
```

---

## Technologies Used

- Node.js
- JavaScript (ES6+)
- Native HTTP Module
- Fetch API
- OpenWeather Geocoding API - https://openweathermap.org/api/geocoding-api?collection=other
- Open-Meteo API - https://open-meteo.com/en/docs
- dotenv

---

## Skills Demonstrated

- REST API design
- API aggregation
- Asynchronous programming
- Environment variable management
- Modular backend architecture
- JSON response design
- Error handling
- HTTP request routing

---

## Installation

```bash
git clone <repo>

cd nimbus

npm install

npm start
```

---

## Future Vision

Nimbus is intended to evolve beyond a simple weather API wrapper into a complete environmental and astronomical information platform featuring weather forecasts, atmospheric conditions, interactive visualizations, and ephemeris data.