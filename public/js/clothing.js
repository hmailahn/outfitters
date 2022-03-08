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
    if(description === ''){
        console.log("No description given")
        return
    }
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
async function clothesSearch() {
    const type = document.querySelector("#type-search").value
    const response  = await fetch('api/clothing/' + type, {
        method: "get",
        headers: { 'Content-Type': 'application/json'}
    })
    if(response.ok) {
        document.location.reload()
    }
    }

document.querySelector('#search-btn').addEventListener('click', clothesSearch)
document.querySelector('.clothes').addEventListener('submit', clothesSubmit)