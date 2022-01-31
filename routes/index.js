const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Router loaded');

router.get('/',homeController.home);
module.exports = router;