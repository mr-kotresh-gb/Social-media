const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Router loaded');

router.get('/',homeController.home);
router.use('/users', require('./users'));

// For any further routes, access from here
// router.use('/.....', require('./routerFile'));




module.exports = router;