const { Clothing } = require("../models/");

const clothingData = [
    {
        description: "pink",
        type: "shirt",
        wardrobe_id: 1
    },
    {
        description: "purple",
        type: "pants",
        wardrobe_id: 1
    },
    {
        description: "black",
        type: "shoes",
        wardrobe_id: 1
    },
    {
        description: "blue flowers",
        type: "shirt",
        wardrobe_id: 1
    },
    {
        description: "gray sweats",
        type: "pants",
        wardrobe_id: 2
    },
    {
        description: "vans",
        type: "shoes",
        wardrobe_id: 2
    }
];

const seedClothing = () => Clothing.bulkCreate(clothingData);

module.exports = seedClothing;

