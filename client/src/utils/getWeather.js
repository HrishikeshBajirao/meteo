export async function getCurrentByCityName(location){
    const response = await fetch("http://localhost:8000/api/current/submit", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({location})
    })
    const data = await response.json();
    return data;
}