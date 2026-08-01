const weatherCont = document.getElementById('weather-container')

const response = await fetch("/api/city/mumbai")
const data = await response.json();
console.log(data)

weatherCont.textContent = JSON.stringify(data)