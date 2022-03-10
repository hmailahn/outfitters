async function outfitGenerator(){
    
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
}
async function getOutfitClothes(legwearId, chestwearId, footwearId) {
    const ids = []
    ids.push(chestwearId)
    ids.push(legwearId)
    ids.push(footwearId)
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
    const outfitSaveBtn = document.createElement('button')
    outfitSaveBtn.id = "save-outfit"
    outfitSaveBtn.textContent = "Save Outfit"
    outfitSaveBtn.className = "Outfitsave-btn btn btn-primary col-3"
    outfitDiv.appendChild(outfitSaveBtn)
    outfitSaveBtn.addEventListener('click', saveOutfit.bind(event, responeArr))
}
async function saveOutfit(outfitArr)  {
    var chestwear_id = 0
    var legwear_id = 0
    var footwear_id = 0
    console.log(outfitArr)
    for(var i =0; i < outfitArr.length; i++){
        const type = outfitArr[i][0].type
        const id = outfitArr[i][0].id
        if(type=== "Chestwear") {
            chestwear_id += id
        } else if (type === "Legwear") {
            legwear_id += id
        } else if (type === "Footwear") {
            footwear_id += id
        }
    }
    console.log(chestwear_id, legwear_id, footwear_id)
    const response = await fetch('api/outfits', {
       method: "post",
       body: JSON.stringify({
        chestwear_id,
        legwear_id,
        footwear_id
       }),
       headers: {
        'Content-Type': 'application/json'
    }
    }) 
    if(response.ok) {
        data = await response.json()
        console.log(data)
    }
}
async function getOutfits() {
    const response = await fetch("/api/outfits", {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
}
getOutfits()
document.querySelector("#outfit-btn").addEventListener('click', outfitGenerator)