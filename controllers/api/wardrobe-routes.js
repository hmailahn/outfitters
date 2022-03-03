const router = require('express').Router();
const { User, Wardrobe } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Wardrobe.findAll()
      .then(dbWardrobeData => res.json(dbWardrobeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;