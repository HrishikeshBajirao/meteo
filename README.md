# ☁️ Meteo

Meteo is a full-stack weather application that provides a clean REST API and a modern React-based user interface for retrieving and visualizing weather information.

Originally built from scratch using Node.js' native HTTP module, the project has since been migrated to Express.js and React to provide a scalable full-stack architecture while continuing to serve as a learning project focused on backend engineering, frontend development, API integration, and software architecture.

---

## Features

### Current

- 🌍 Search weather by city
- 📝 React-based search form
- 📤 Form submission using HTTP POST
- 📍 Automatic geocoding
- 🌤️ Current weather conditions
- 📄 Dynamic weather card rendering
- ⚛️ React frontend
- 🚀 Express.js backend
- 📦 REST API
- 📱 Responsive user interface
- ⚠️ Error handling
- 🔐 Environment variable configuration

---

### Planned

- ⚡ In-memory response caching
- 🔎 Location autocomplete
- 📅 7-day & hourly forecasts
- 📊 Interactive D3.js visualizations
- 💾 Search history & favorites
- 🌫️ Air quality data
- ☀️ UV index
- 🌙 Astronomical & ephemeris information
- 🛰️ Satellite & celestial event data
---

## API Endpoints

### Query Parameter

```
GET /api/current?city=Mumbai
```

### Path Parameter

```
GET /api/current/city/Mumbai
```

### Search Weather (Form Submission)

```http
POST /api/submit
```

**Content-Type**

```text
application/x-www-form-urlencoded
```

**Body**

```text
city=Mumbai
```

### Example Response

```json
{
  "location": "Mumbai",
  "lat": 18.973,
  "lon": 72.828,
  "current": {
    "temperature": {
      "value": 27.8,
      "unit": "°C"
    },
    "humidity": {
      "value": 84,
      "unit": "%"
    },
    "wind_speed": {
      "value": 26.6,
      "unit": "km/h"
    }
  }
}
```

---

## Technologies Used

### Frontend

- React
- JavaScript (ES6+)
- Vite
- CSS

### Backend

- Node.js
- Express.js
- REST APIs

### External APIs

- OpenWeather Geocoding API
- Open-Meteo API

### Other

- dotenv

---

## Skills Demonstrated

- Full-stack application architecture
- REST API design
- Express.js routing
- Controller-based backend architecture
- React component development
- API integration
- Asynchronous programming
- Environment variable management
- Responsive UI development
- JSON response design
- Error handling

---

## 📈 Development Statistics

This project is actively maintained and tracked using GitHub and WakaTime.

<p align="center">

[![GitHub last commit](https://img.shields.io/github/last-commit/HrishikeshBajirao/meteo?style=for-the-badge)](https://github.com/HrishikeshBajirao/atlas/commits/main)

[![WakaTime](https://wakatime.com/badge/user/7864a36e-34fb-462c-a73d-d8c410aed4dc/project/c833d946-27aa-4b9d-9ab0-d623ea74a488.svg?style=for-the-badge)](https://wakatime.com/badge/user/7864a36e-34fb-462c-a73d-d8c410aed4dc/project/c833d946-27aa-4b9d-9ab0-d623ea74a488)

</p>

## Installation

```bash
git clone <repo>

cd meteo

npm install

npm start
```

---

## Future Vision

Meteo is intended to evolve into a complete weather and environmental information platform.

The long-term vision includes weather forecasts, atmospheric conditions, interactive visualizations, climate statistics, astronomical observations, ephemeris calculations, celestial events, and other Earth & space related datasets presented through a clean, interactive interface.