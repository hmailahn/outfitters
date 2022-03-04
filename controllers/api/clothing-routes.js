const router = require('express').Router();
const { User, Clothing } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Clothing.findAll()
      .then(dbClothingData => res.json(dbClothingData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Clothing.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'description',
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
  
  router.post('/', (req, res) => {
  ///add in withAuth later
      Clothing.create({
        description: req.body.description,
        wardrobe_id: req.body.wardrobe_id
      })
        .then(dbClothingData => res.json(dbClothingData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    
  });

  module.exports = router;
