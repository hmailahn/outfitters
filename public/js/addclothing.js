async function clothesSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const description = document.querySelector("#description").value
    const type = document.querySelector("#Type").value
    const submitDiv = document.querySelector("#submit-message")
    const success = document.createElement("p")
        if(submitDiv.innerHTML === ""){
        success.textContent = description + " has been added to your wardrobe"
        } else{
            submitDiv.innerHTML = ""
            success.textContent = description + " has been added to your wardrobe"
        }
    if(description === ''){
        const alertDiv = document.querySelector("#submit-message")
        const alertP = document.createElement('p')
        alertP.textContent = "Please Fill out Both parts of the form"
        alertDiv.appendChild(alertP)
        return
    }
    if(type === "Type-Select"){
        const alertDiv = document.querySelector("#submit-message")
        const alertP = document.createElement('p')
        alertP.textContent = "Please Fill out Both parts of the form"
        alertDiv.appendChild(alertP)
        return
    }
    const response = await fetch('api/clothing', {
        method: "post",
        body: JSON.stringify({
            description,
            type
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    if (response.ok){
        descriptionReset = document.querySelector("#description")
        typeReset = document.querySelector("#Type")
        descriptionReset.value = ""
        typeReset.selectedIndex = 0
        submitDiv.appendChild(success)
        return descriptionReset, typeReset
    } else {
        console.log("you're really dumb huh")
    }
}
document.querySelector('#clothing').addEventListener('click', clothesSubmit)