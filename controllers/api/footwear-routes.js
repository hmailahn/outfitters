const router = require('express').Router();
const { User, Footwear } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Footwear.findAll()
      .then(dbFootwearData => res.json(dbFootwearData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;

