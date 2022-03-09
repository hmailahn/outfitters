async function clothesSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const description = document.querySelector("#description").value
    const type = document.querySelector("#Type").value
    if(description === ''){
        console.log("No description given")
        return
    }
    if(type === "Type-Select"){
        console.log("No Type Selected")
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
        return descriptionReset, typeReset
    } else {
        console.log("you're really dumb huh")
    }
}
document.querySelector('#clothing').addEventListener('click', clothesSubmit)