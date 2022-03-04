const router = require('express').Router();

const clothingRoutes = require('./clothing-routes.js');
const wardrobeRoutes = require('./wardrobe-routes');
const userRoutes = require('./user-routes');


router.use('/clothing', clothingRoutes);
router.use('/wardrobe', wardrobeRoutes);
router.use('/users', userRoutes);

module.exports = router;
