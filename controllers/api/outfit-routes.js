const router = require('express').Router();
const { User, Outfit } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Outfit.findAll()
      .then(dbOutfitData => res.json(dbOutfitData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;