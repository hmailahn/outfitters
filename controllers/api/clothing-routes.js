const router = require('express').Router();
const { User, Clothing } = require('../../models');
const withAuth = require('../../utils/auth');

//find all clothes, i don't think we will necessarily need this
router.get('/', (req, res) => {
    Clothing.findAll()
      .then(dbClothingData => res.json(dbClothingData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//find clothing by id- this is only for clothing id
  router.get('/:id', (req, res) => {
    Clothing.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'description',
        'type',
        'wardrobe_id'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbClothingData => {
        if (!dbClothingData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
        res.json(dbClothingData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //find clothing by wardrobe id
  router.get('/:id', (req, res) => {
    Clothing.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'description',
        'type',
        'wardrobe_id'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbClothingData => {
        if (!dbClothingData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
        res.json(dbClothingData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //post clothing route
  router.post('/', withAuth, (req, res) => {
  ///only able to post clothes if logged in
  if (req.session) {
      Clothing.create({
        description: req.body.description,
        type: req.body.type,
        wardrobe_id: req.body.wardrobe_id
      })
        .then(dbClothingData => res.json(dbClothingData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
      }
  });

  ///can add put and delete routes later



  module.exports = router;
