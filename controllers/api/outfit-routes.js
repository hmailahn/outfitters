const router = require('express').Router();
const sequelize = require('../../config/connection')
const { User, Clothing, Outfit } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Outfit.findAll({
        where: {
            user_id: req.session.user_id,
        }
    }).then(dbOutfitData => res.json(dbOutfitData))
    .catch(err=> {
        console.log(err);
        res.status(500).json(err)
    })
})
router.post('/', (req, res) => {
    console.log(req.body.chestwear_id, req.body.legwear_id, req.body.footwear_id,)
    Outfit.create({
        user_id: req.session.user_id,
        chestwear_id: req.body.chestwear_id,
        legwear_id: req.body.legwear_id,
        footwear_id: req.body.footwear_id,
    })
    .then(dbOutfitData => res.json(dbOutfitData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})
module.exports = router;