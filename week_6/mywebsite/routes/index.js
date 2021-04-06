var express = require('express');
var router = express.Router();
const product_controller = require('../controllers/product_controller')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:'home', menuId:'home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { page:'about us', menuId:'about' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { page:'contact us', menuId:'contact' });
});
router.get('/product',product_controller.list);



module.exports = router;
