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
        deleteBtn.className= "DeleteBtn"
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
async function outfitGenerator(event){
    
    const allClothes = await fetch('api/clothing', {
        method: "GET",
        headers: {
            'Content-Type': 'applications/json'
        }
    }
    )
    const data = await allClothes.json()
    var legwear = []
    var chestwear = []
    var footwear = []
    for (var i = 0; i < data.length; i++) {
        if(data[i].type === "Chestwear"){
            chestwear.push(data[i])
        } else if(data[i].type === "Legwear") {
            legwear.push(data[i])
        } else if(data[i].type === 'Footwear'){
            footwear.push(data[i])
        }
    }
    getClothesIdForOutfit(legwear, chestwear, footwear)
}
async function getClothesIdForOutfit(legwear, chestwear, footwear) {
    const legwearId = []
    for (var i = 0; i < legwear.length; i++){
       legwearId.push(legwear[i].id)
    }
    const chestwearId = []
    for (var i = 0; i < chestwear.length; i++){
        chestwearId.push(chestwear[i].id)
    }
    const footwearId = []
    for (var i = 0; i < footwear.length; i++){
        footwearId.push(footwear[i].id)
     }
    const randomLegwearNum = Math.floor(Math.random() * legwear.length)
    const randomLegwear = legwear[randomLegwearNum].id
    const randomchestwearNum = Math.floor(Math.random() * chestwear.length)
    const randomchestwear = chestwear[randomchestwearNum].id
    const randomfootwearNum = Math.floor(Math.random() * footwear.length)
    const randomfootwear = footwear[randomfootwearNum].id
    getOutfitClothes(randomLegwear, randomchestwear, randomfootwear)
    console.log(randomLegwear, randomfootwear, randomchestwear)
}
async function getOutfitClothes(legwearId, chestwearId, footwearId) {
    const ids = []
    ids.push(chestwearId)
    ids.push(footwearId)
    ids.push(legwearId)
    const outfitDiv = document.querySelector('#outfit')
    const responeArr = []
    for (var i = 0; i < ids.length ; i++) {
        const response = await fetch("api/clothing/" + ids[i], {
            method: "get",
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            const data = await response.json()
            responeArr.push(data)
        }
    }
    for (var i = 0; i < responeArr.length; i++) {
        const type = responeArr[i][0].type
        const outfitP = document.createElement('p')
        outfitP.textContent = responeArr[i][0].description
        const outfitIcon = document.createElement('img')
        outfitIcon.src = "icons/" + type + ".png"
        outfitDiv.appendChild(outfitP)
        outfitDiv.appendChild(outfitIcon)
    }
}
getAllClothes()
document.querySelector("#legwear").addEventListener('click', clothesSearch)
document.querySelector("#chestwear").addEventListener('click', clothesSearch)
document.querySelector('#footwear').addEventListener('click', clothesSearch)
document.querySelector("#outfit-btn").addEventListener('click', outfitGenerator)