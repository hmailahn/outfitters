const { Clothing } = require("../models/");

const clothingData = [
    {
        description: "pink",
        type: "chestwear",
        wardrobe_id: 1
    },
    {
        description: "purple",
        type: "legwear",
        wardrobe_id: 1
    },
    {
        description: "black",
        type: "footwear",
        wardrobe_id: 1
    },
    {
        description: "blue flowers",
        type: "chestwear",
        wardrobe_id: 1
    },
    // {
    //     description: "gray sweats",
    //     type: "legwear",
    //     wardrobe_id: 1
    // },
    // {
    //     description: "vans",
    //     type: "footwear",
    //     wardrobe_id: 1
    // }
];

const seedClothing = () => Clothing.bulkCreate(clothingData);

module.exports = seedClothing;

