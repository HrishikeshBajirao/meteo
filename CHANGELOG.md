# Changelog

All notable changes to this project will be documented here.

---

## [0.2.0] - 2026-08-06

### Added

- React frontend
- Responsive weather interface
- Search form for location input
- Weather card component for displaying weather information
- Form submission using HTTP POST requests
- Dynamic rendering of weather data returned from the backend
- Component-based frontend architecture

### Changed

- Migrated backend from native HTTP module to Express.js
- Reorganized backend using Express Router and controllers
- Converted project into a full-stack application
- Improved application styling and overall user experience
- Separated frontend and backend into dedicated client and server applications

### Planned Next

- In-memory response caching
- Location autocomplete
- Debounced search

## [0.1.0] - 2026-08-01

### Added

- Native Node.js HTTP server
- Weather endpoint using query parameters
- Weather endpoint using path parameters
- OpenWeather Geocoding integration
- Open-Meteo current weather integration
- Modular project architecture
- Centralized response helper
- Environment variable support
- Error handling for invalid cities
- Structured JSON responses including measurement units

### Changed

- Migrated from Visual Crossing API to Open-Meteo