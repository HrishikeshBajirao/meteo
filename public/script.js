const weatherCont = document.getElementById('weather-container')
const formEl = document.getElementById('location-form')

const response = await fetch("/api/city/mumbai")
const data = await response.json();

const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formEl);
    const cityName = formData.get("city")
    console.log(cityName)
}

weatherCont.innerHTML = Object.entries(data).map(([key, value]) => {
    if(key === "time" || key === "interval")
        return
    if(typeof value !== "object"){
        return `<p>${key}: ${value}</p>`
    }
    else{
        return `<p>${key}: ${value.value + ' ' + value.unit}</p>`
    }
    return `<p>${key}: ${value}</p>`
}).join("")

formEl.addEventListener('submit', handleFormSubmit)