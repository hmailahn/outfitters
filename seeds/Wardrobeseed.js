const { Wardrobe } = require('../models/');

const wardrobeData = [
    {
        user_id: 1
    }
];

const seedWardrobe = () => Wardrobe.bulkCreate(wardrobeData);

module.exports = seedWardrobe;