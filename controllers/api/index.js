const router = require('express').Router();

const clothingRoutes = require('./clothing-routes.js');
const userRoutes = require('./user-routes');


router.use('/clothing', clothingRoutes);
router.use('/users', userRoutes);

module.exports = router;
