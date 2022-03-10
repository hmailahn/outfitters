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
        const allClothingDiv = document.querySelector("#all-clothes")
        for(var i = 0; i < data.length; i++) {
        const clothingDiv = document.createElement('div')
        clothingDiv.id = data[i].id
        const clothingP = document.createElement('p')
        clothingP.textContent = data[i].description
        const clothingIcon = document.createElement('img')
        clothingIcon.src = "icons/" + data[i].type + ".png"
        const deleteId = data[i].id
        const deleteBtn = document.createElement('button')
        deleteBtn.id = deleteId
        deleteBtn.textContent = "Delete"
        deleteBtn.className= "DeleteBtn btn btn-primary col-3"
        clothingDiv.appendChild(clothingP)
        clothingDiv.appendChild(clothingIcon)
        deleteBtn.addEventListener('click', deleteItem)
        clothingDiv.appendChild(deleteBtn)
        allClothingDiv.appendChild(clothingDiv)
        }
    } else{
        alert(response.statusText)
    }
}

async function clothesSearch(event) {
    if(event.target.className === "toggled") {
        event.target.className = "untoggled"
        toggledDiv = document.querySelector("#" + event.target.textContent + "-subdiv")
        console.log(toggledDiv)
        toggledDiv.remove()
    } else {
    console.log("button has not been toggled")
    var type = event.target.textContent
    const response  = await fetch('api/clothing/' + type, {
        method: "get",
        headers: { 'Content-Type': 'application/json'}
    })
    if(response.ok) {
        const data = await response.json()
        console.log(data)
        const clothingDiv = document.querySelector("#" + type +"-div")
        const subDiv = document.createElement("div")
        for(var i = 0; i < data.length; i++) {
        subDiv.id = data[0].type + "-subdiv"
        const clothingP = document.createElement('p')
        clothingP.textContent = data[i].description
        const clothingIcon = document.createElement('img')
        clothingIcon.src = "icons/" + type + ".png"
        subDiv.appendChild(clothingP)
        subDiv.appendChild(clothingIcon)
        clothingDiv.appendChild(subDiv)
        }
        event.target.className = "toggled";
    }
    }}
    
async function deleteItem(event) {
    const id = event.path[0].id
    console.log(id)
    const response = await fetch('api/clothing/' + id, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json'}
    })
    if(response.ok){
        document.location.reload()
    }
}

getAllClothes()
document.querySelector("#legwear").addEventListener('click', clothesSearch)
document.querySelector("#chestwear").addEventListener('click', clothesSearch)
document.querySelector('#footwear').addEventListener('click', clothesSearch)
