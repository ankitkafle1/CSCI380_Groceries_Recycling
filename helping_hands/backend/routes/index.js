var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Ankit page. */
router.get('/api/customers', function(req, res, next) {
     const customers = [
      {
        id: 1,
        firstName:'John', lastName:'Doe'
      },
      {
        id: 2,
        firstName:'Steve', lastName: 'Smith'
      },
      {
        id: 3,
        firstName:'Mary', lastName:'Swanson'
      },
  ]
  res.json(customers)
});

module.exports = router;
