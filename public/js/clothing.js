async function clothingButtonHandler() {
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
async function clothesSubmit(event) {
    event.preventDefault();
    const description = document.querySelector("#description").value.trim()
    const type = document.querySelector("#Type").value
    const user_id = 1
    const response = await fetch('api/clothing', {
        method: "post",
        body: JSON.stringify({
            description,
            type,
            user_id
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    if (response.ok){
        console.log('added clothes')
    } else {
        console.log("you're really dumb huh")
    }
}
async function getByType(event) {
    event.preventDefault();
    const type = document.querySelector("#Type-2").value
    const response = await fetch("api/clothing/type", {
        method: "get",
        body: JSON.stringify({
            type
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
    if(response.ok){
     console.log("ok? you did the expected?")       
    } else {
        console.log('you absolute bafoon')
    }
}
document.querySelector('#clothes-search').addEventListener('submit', getByType)
document.querySelector('.clothes').addEventListener('submit', clothesSubmit)