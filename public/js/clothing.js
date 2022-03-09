var itemAdded = document.querySelector('.itemAdded');
var notAdded = document.querySelector('.notAdded');

async function getAllClothes() {
    const response = await fetch('api/clothing', {
        method: "GET",
        headers: {
            'Content-Type': 'applications/json'
        }
    }
    )
    if( response.ok) {
        const data = await response.json()
        const clothingDiv = document.querySelector("#all-clothes")
        for(var i = 0; i < data.length; i++) {
        const clothingP = document.createElement('p')
        clothingP.textContent = data[i].description
        const clothingIcon = document.createElement('img')
        clothingIcon.src = "icons/" + data[i].type + ".png"
        clothingDiv.appendChild(clothingP)
        clothingDiv.appendChild(clothingIcon)
        }
    } else{
        alert(response.statusText)
    }
}
async function clothesSubmit(event) {
    console.log("button clicked")
    event.preventDefault();
    event.stopPropagation();
    const description = document.querySelector("#description").value.trim()
    const type = document.querySelector("#Type").value
    if(description === ''){
        console.log("No description given")
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
        console.log('added clothes')
        // style.display.block(itemAdded);
    } else {
        console.log("you're really dumb huh")
        style.display.block(notAdded);
    }
}
async function clothesSearch(event) {
    var type = event.target.textContent
    const response  = await fetch('api/clothing/' + type, {
        method: "get",
        headers: { 'Content-Type': 'application/json'}
    })
    if(response.ok) {
        const data = await response.json()
        const clothingDiv = document.querySelector("#" + type +"-div")
        for(var i = 0; i < data.length; i++) {
        const clothingP = document.createElement('p')
        clothingP.textContent = data[i].description
        const clothingIcon = document.createElement('img')
        clothingIcon.src = "icons/" + type + ".png"
        clothingDiv.appendChild(clothingP)
        clothingDiv.appendChild(clothingIcon)
        }
    }
    }
getAllClothes()
const footwearSearch = document.querySelector("#legwear").addEventListener('click', clothesSearch)
const legwearSearch = document.querySelector("#footwear").addEventListener('click', clothesSearch)
const chestwearSearch = document.querySelector("#chestwear").addEventListener('click', clothesSearch)
document.querySelector('#clothing').addEventListener('click', clothesSubmit)