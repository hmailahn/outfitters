async function chestwearButtonHandler() {
    const response = await fetch('api/clothing', {
        method: "GET",
        headers: {
            'Content-Type': 'applications/json'
        }
    }
    )
    if( response.ok) {
        console.log(JSON.stringify(response))
    } else{
        alert(response.statusText)
    }
}

chestwearButtonHandler()