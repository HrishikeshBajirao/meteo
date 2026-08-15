export async function getCurrentByCityName(location){
    try {
        const response = await fetch("http://localhost:8000/api/current/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({location})
        })

        if(!response.ok){
            const errorBody = await response.text().catch(() => '');
            throw new Error(`Request failed with status ${response.status}: ${errorBody}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Error fetching the weather: ", err);
    }
}