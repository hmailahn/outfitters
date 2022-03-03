const router = require('express').Router();
const { User, Chestwear } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Chestwear.findAll()
      .then(dbChestwearData => res.json(dbChestwearData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Chestwear.findOne({
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
      .then(dbChestwearData => {
        if (!dbChestwearData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
        res.json(dbChestwearData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/', (req, res) => {
  ///add in withAuth later
      Chestwear.create({
        description: req.body.description,
        wardrobe_id: req.body.wardrobe_id
      })
        .then(dbChestwearData => res.json(dbChestwearData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    
  });

  module.exports = router;
