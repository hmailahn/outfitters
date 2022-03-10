async function outfitGenerator(){
    
    const allClothes = await fetch('api/clothing', {
        method: "GET",
        headers: {
            'Content-Type': 'applications/json'
        }
    }
    )
    const outfitDiv = document.querySelector('#outfit')
    outfitDiv.innerHTML = ""
    const data = await allClothes.json()
    console.log(data.length)
    if(data.length === 0) {
        const outfitDiv = document.querySelector('#outfit')
        const outfitMesage = document.createElement('p')
        outfitMesage.textContent = "You need to have at least 1 of each type to generate a outfit!"
        outfitDiv.appendChild(outfitMesage)
        return
    }
    var legwear = []
    var chestwear = []
    var footwear = []
    console.log(data[0].type)
    for (var i = 0; i < data.length; i++) {
       
        if(data[i].type === "chestwear"){
            chestwear.push(data[i])
        } else if(data[i].type === "legwear") {
            legwear.push(data[i])
        } else if(data[i].type === 'footwear'){
            footwear.push(data[i])
        }
    }
    console.log(legwear.length, footwear.length, chestwear.length)
    if(legwear.length === 0) {
        const outfitDiv = document.querySelector('#outfit')
        const outfitMesage = document.createElement('p')
        outfitMesage.textContent = "You need to have at least 1 of each type to generate a outfit!"
        outfitDiv.appendChild(outfitMesage)
        return
    } else if(footwear.length === 0){
        const outfitDiv = document.querySelector('#outfit')
        const outfitMesage = document.createElement('p')
        outfitMesage.textContent = "You need to have at least 1 of each type to generate a outfit!"
        outfitDiv.appendChild(outfitMesage)
        return
    } else if(chestwear === 0){
        const outfitDiv = document.querySelector('#outfit')
        const outfitMesage = document.createElement('p')
        outfitMesage.textContent = "You need to have at least 1 of each type to generate a outfit!"
        outfitDiv.appendChild(outfitMesage)
        return
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
    const outfitGeneratorBtn = document.querySelector('#outfit-btn')
    const outfitContentDiv = document.createElement('div')
    outfitGeneratorBtn.textContent = "Generate New Outfit"
    outfitContentDiv.id = "outfit-content-div"
    for (var i = 0; i < responeArr.length; i++) {
        const type = responeArr[i][0].type
        const outfitP = document.createElement('p')
        outfitP.textContent = responeArr[i][0].description
        const outfitIcon = document.createElement('img')
        outfitIcon.src = "icons/" + type + ".png"
        outfitContentDiv.appendChild(outfitP)
        outfitContentDiv.appendChild(outfitIcon)
    }
    const outfitSaveBtn = document.createElement('button')
    outfitSaveBtn.id = "save-outfit"
    outfitSaveBtn.textContent = "Save Outfit"
    outfitSaveBtn.className = "Outfitsave-btn btn btn-primary col-3"
    outfitContentDiv.appendChild(outfitSaveBtn)
    outfitSaveBtn.addEventListener('click', saveOutfit.bind(event, responeArr))
    outfitDiv.appendChild(outfitContentDiv)
}
async function saveOutfit(outfitArr)  {
    var chestwear_id = 0
    var legwear_id = 0
    var footwear_id = 0
    for(var i =0; i < outfitArr.length; i++){
        const type = outfitArr[i][0].type
        const id = outfitArr[i][0].id
        if(type=== "chestwear") {
            chestwear_id += id
        } else if (type === "legwear") {
            legwear_id += id
        } else if (type === "footwear") {
            footwear_id += id
        }
    }
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
        const outfitContentDiv = document.querySelector("#outfit-content-div")
        outfitContentDiv.remove()
        const outfitDiv = document.querySelector("#outfit")
        const savedOutfitp = document.createElement("p")
        savedOutfitp.textContent = "Outfit #" + data.id + " has been saved" 
        outfitDiv.appendChild(savedOutfitp) 
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
}
// async function deleteOutfits() {
//     const response = await fetch("api/outfits", {
//         method: "delete",
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }
// deleteOutfits()
getOutfits()
document.querySelector("#outfit-btn").addEventListener('click', outfitGenerator)