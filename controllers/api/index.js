const router = require('express').Router();

const chestwearRoutes = require('./chestwear-routes.js');
const footwearRoutes = require('./footwear-routes');
const legwearRoutes = require('./legwear-routes');
const outfitRoutes = require('./outfit-routes');
const wardrobeRoutes = require('./wardrobe-routes');
const userRoutes = require('./user-routes');


router.use('/chestwear', chestwearRoutes);
router.use('/footwear', footwearRoutes);
router.use('/legwear', legwearRoutes);
router.use('/outfit', outfitRoutes);
router.use('/wardrobe', wardrobeRoutes);
router.use('/user', userRoutes);

module.exports = router;
