const { Clothing } = require("../models/");

const clothingData = [
    {
        description: "pink",
        type: "shirt",
        user_id: 1
    },
    {
        description: "purple",
        type: "pants",
        user_id: 1
    },
    {
        description: "black",
        type: "shoes",
        user_id: 1
    },
    {
        description: "blue flowers",
        type: "shirt",
        user_id: 1
    },
    {
        description: "gray sweats",
        type: "pants",
        user_id: 2
    },
    {
        description: "vans",
        type: "shoes",
        user_id: 2
    }
];

const seedClothing = () => Clothing.bulkCreate(clothingData);

module.exports = seedClothing;

