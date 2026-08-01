# ☁️ Nimbus

Nimbus is a lightweight Node.js backend service that aggregates weather data from external APIs and exposes a clean, developer-friendly REST API.

Built from scratch using Node.js' native HTTP module, the project serves as a learning exercise in backend development, API integration, and scalable project architecture.

---

## Features

### Current

- 🌍 Search weather by city name
- 📍 Automatic geocoding
- 🌡️ Current weather retrieval
- 💨 Wind speed & direction
- 💧 Relative humidity
- 🌧️ Precipitation data
- 📦 Clean JSON API responses
- ⚠️ Error handling
- 🔐 Environment variable configuration

---

## Planned

- 🌤️ 7-day weather forecasts
- 🕒 Hourly forecasts
- 📈 Historical weather
- ⚡ Response caching
- 🌎 Reverse geocoding
- 📊 Interactive weather dashboard
- 🛰️ Ephemeris & astronomical data
- 🌙 Sunrise / Sunset
- 🌌 Moon phase
- ☀️ Solar position
- ⭐ Planet visibility
- 📍 User favorites
- 🔑 Authentication

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
    "lat": 19.07,
    "lon": 72.88,
    "temperature_2m": {
        "value": 30.5,
        "unit": "°C"
    },
    "relative_humidity_2m": {
        "value": 82,
        "unit": "%"
    }
}
```

---

## Technologies Used

- Node.js
- JavaScript (ES6+)
- Native HTTP Module
- Fetch API
- OpenWeather Geocoding API
- Open-Meteo API
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