const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.route('/users').post(userController.addUser);
router.route('/auth').post(userController.login);

module.exports = router;