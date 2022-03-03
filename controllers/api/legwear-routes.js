const router = require('express').Router();
const { User, Legwear } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Legwear.findAll()
      .then(dbLegwearData => res.json(dbLegwearData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;