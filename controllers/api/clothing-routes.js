const router = require('express').Router();
const sequelize = require('../../config/connection')
const { User, Clothing, Wardrobe } = require('../../models');
const withAuth = require('../../utils/auth');

//find all clothes for user logged in session by using wardrobe_id
router.get('/', (req, res) => {
    Clothing.findAll({
      // where: {
      //   wardrobe_id: req.session.user_id
      // },
    })
      .then(dbClothingData => res.json(dbClothingData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

///trying to get just shirts for user, not sure how to go about it - recieivng an error rn
  router.get('/chestwear', (req, res) => {
   console.log('test');
   
    // if (req.session) {
    Clothing.findAll({
      where: {
        wardrobe_id: req.session.user_id
      },
      attributes:[
        'id',
        'description'
      [sequelize.literal('(SELECT * FROM clothing WHERE type = ?)'), 'type']
      ]
    })
    .then(dbClothingData => res.json(dbClothingData))
    .catch (err => {
      console.log(err);
      res.status(500).json(err);

    })
  // }
  })

  //post clothing route, user needs to be logged in
  router.post('/', (req, res) => {
  ///only able to post clothes if logged in
  // if (req.session) {
      Clothing.create({
        description: req.body.description,
        type: req.body.type,
        wardrobe_id: req.body.user_id
      })
        .then(dbClothingData => res.json(dbClothingData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
      // }
  });

  ///can add put and delete routes later



  module.exports = router;
