const router = require('express').Router();
const { User, Wardrobe, Clothing } = require('../../models');
const withAuth = require('../../utils/auth');

//get all wardrobe from user logged in
router.get('/', withAuth, (req, res) => {
    Wardrobe.findAll({
        where: {
            user_id: req.session.user_id
          },
    })
      .then(dbWardrobeData => res.json(dbWardrobeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//create a wardrobe, attach to a user_id
router.post('/', (req, res) => {
    Wardrobe.create({
        user_id: req.body.user_id
    })
    .then(dbWardrobeData => res.json(dbWardrobeData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
})

module.exports = router;