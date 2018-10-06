const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const productController = require('./controllers/productController')

router.route('/users').post(userController.addUser);
router.route('/auth').post(userController.login);
router.route('/product').post(productController.addProduct);
router.route('/product').get(productController.getAllProduct);
router.route('/product/:productId').patch(productController.updateProductById);


module.exports = router;