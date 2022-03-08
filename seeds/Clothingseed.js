const { Clothing } = require("../models/");

const clothingData = [
    {
        description: "pink",
        type: "chestwear",
        user_id: 1
    },
    {
        description: "purple",
        type: "legwear",
        user_id: 1
    },
    {
        description: "black",
        type: "footwear",
        user_id: 1
    },
    {
        description: "blue flowers",
        type: "chestwear",
        user_id: 1
    },
    {
        description: "gray sweats",
        type: "legwear",
        user_id: 1
    },
    {
        description: "vans",
        type: "footwear",
        user_id: 1
    },
    {
        description: "MTG shirt",
        type: "chestwear",
        user_id: 2
    },
    {
        description: "black nike joggers",
        type: "legwear",
        user_id: 2
    },
    {
        description: "black midtop nike airforce 1",
        type: "footwear",
        user_id: 2
    }
];

const seedClothing = () => Clothing.bulkCreate(clothingData);

module.exports = seedClothing;

