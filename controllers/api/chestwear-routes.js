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
  