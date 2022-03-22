const userController = require('../controllers/userController')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Getting the information about the users
router.route('/api/users').get(userController.getAllUsers)   

//
router.route('/api/users').post(userController.addNewUser)

module.exports = router;
