const router = require('express').Router();

 //homepage, user can click options to add to wardrobe or add clothing
 router.get('/', (req, res) => {
// if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
// }
//buttons on homepage to add clothing or view wardrobe

 })

//log in route. If user is loginned, they will be redirected to the home page /
//if user is not logged in they will need to log in to go to their homepage
router.get('/login', (req, res) => {
    // // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // // }
  
    res.render('login');
  });
  
 

  module.exports = router;
  