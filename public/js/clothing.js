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
    if(event.target.Id === "toggled") {
        event.target.Id = "untoggled"
        toggledDiv = document.querySelector("#" + event.target.textContent + "-contentdiv")
        toggledDiv.remove()
    } else {
    var type = event.target.textContent
    const response  = await fetch('api/clothing/' + type, {
        method: "get",
        headers: { 'Content-Type': 'application/json'}
    })
    if(response.ok) {
        const data = await response.json()
        const clothingDiv = document.querySelector("#" + type +"-div")
        const clothingDivContent = document.createElement('div')
        clothingDivContent.id = data[0].type + "-contentdiv"
        if(data.length === 0) {
            const clothingP = document.createElement('p') 
            clothingP.textContent = "No " + type + " Found"
            clothingDivContent.appendChild(clothingP)
            clothingDivContent.id = type + "-div"
            clothingDiv.appendChild(clothingDivContent)
        } else{
        for(var i = 0; i < data.length; i++) {
        const subDiv = document.createElement("div")
        subDiv.id = data[0].type + "-subdiv"
        const clothingP = document.createElement('p')
        clothingP.textContent = data[i].description
        const clothingIcon = document.createElement('img')
        clothingIcon.src = "icons/" + type + ".png"
        subDiv.appendChild(clothingP)
        subDiv.appendChild(clothingIcon)
        clothingDivContent.appendChild(subDiv)
        clothingDiv.appendChild(clothingDivContent)
        }
    }
        event.target.Id = "toggled";
    }
    }}
    
async function deleteItem(event) {
    const id = event.path[0].id
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
