const router = require('express').Router();

const clothingRoutes = require('./clothing-routes.js');
const userRoutes = require('./user-routes');
const outfitRoutes = require('./outfit-routes')

router.use('/clothing', clothingRoutes);
router.use('/users', userRoutes);
router.use('/outfits', outfitRoutes)
module.exports = router;
