const router = require('express').Router();
const sequelize = require('../../config/connection')
const { User, Clothing } = require('../../models');
const withAuth = require('../../utils/auth');

//find all clothes for user logged in session by using wardrobe_id
router.get('/', (req, res) => {
    Clothing.findAll({
      //hard code to test
      // where: {
      //   user_id: 1,
      // },
      // WHEN SESSIONS FULLY FUNCTIONAL, SWITCH ABOVE WHERE CLAUSE WITH BELOW WHERE CLAUSE, can ask john to do since has context
      where: {
        user_id: req.session.user_id,
      },
    })
      .then(dbClothingData => res.json(dbClothingData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

///trying to get just shirts for user, not sure how to go about it - recieivng an error rn
router.get('/chestwear', withAuth, (req, res) => {   
    if (req.session) {
    Clothing.findAll({
      //hard code to test
      // where: {
      //   user_id: 1,
      //   type: 'chestwear'
      // },
      // WHEN SESSIONS FULLY FUNCTIONAL, SWITCH ABOVE WHERE CLAUSE WITH BELOW WHERE CLAUSE, can ask john to do since has context
      where: {
        user_id: req.session.user_id,
        type: 'chestwear'
      },
      attributes: [
        'user_id',
        'id',
        'description',
        'type'
      ]
    })
    .then(dbClothingData => res.json(dbClothingData))
    .catch (err => {
      console.log(err);
      res.status(500).json(err);

    })
  }
 
})

// get legwear route by user_id
router.get('/legwear', withAuth, (req, res) => {
  console.log('test');
  
   if (req.session) {
   Clothing.findAll({
     //hard code to test
    // where: {
    //   user_id: 1,
    //   type: 'legwear'
    // },
    // WHEN SESSIONS FULLY FUNCTIONAL, SWITCH ABOVE WHERE CLAUSE WITH BELOW WHERE CLAUSE, can ask john to do since has context 
     where: {
       user_id: req.session.user_id,
       type: 'legwear'
     },
     attributes:[
      'user_id',
      'id',
      'description',
      'type'     ]
   })
   .then(dbClothingData => res.json(dbClothingData))
   .catch (err => {
     console.log(err);
     res.status(500).json(err);
   })
 }
})

//footwear route, can only return 1 rn
router.get('/footwear', withAuth, (req, res) => {
  console.log('test');
  
   if (req.session) {
   Clothing.findAll({
     //hard code to test
    // where: {
    //   user_id: 1,
    //   type: 'footwear'
    // },
    // WHEN SESSIONS FULLY FUNCTIONAL, SWITCH ABOVE WHERE CLAUSE WITH BELOW WHERE CLAUSE, can ask john to do since has context 
     where: {
       user_id: req.session.user_id,
       type: 'footwear'
     },
     attributes:[
      'user_id',
      'id',
      'description',
      'type'       
     ]
   })
   .then(dbClothingData => {res.json(dbClothingData)})
   .catch (err => {
     console.log(err);
     res.status(500).json(err);

   })
 }
})


//post clothing route, user needs to be logged in
router.post('/', withAuth, (req, res) => {
///only able to post clothes if logged in
    Clothing.create({
      description: req.body.description,
      type: req.body.type,
      user_id: req.session.user_id
    })
      .then(dbClothingData => res.json(dbClothingData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

  ///can add put and delete routes later



module.exports = router;
