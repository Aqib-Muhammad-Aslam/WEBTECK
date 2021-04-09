var express = require('express');
var router = express.Router();
var product_controller=require('../controllers/product_controller');
const { route } = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:'HOME', menuId:'home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { page:'ABOUT US', menuId:'about' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { page:'contact us', menuId:'contact' });
});

//------------curd operation
//route that get the list
router.get('/list',product_controller.list);
//route that will show the insert form
router.get('/createform',product_controller.product_formcreate);
//route will perform the insert operation
router.post('/create',product_controller.product_create);
//route will req to delete
router.post('/:id/delete',product_controller.product_delete)
//cal the update_part
router.post('/updateform/:id',product_controller.product_updateform)
router.post('/:id/update',product_controller.product_update)

module.exports = router;
