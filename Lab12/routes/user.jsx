const express = require('express');
const Schema = express.Router();

const userController = require('../controllers/user');

router.get('/',userController.find);
router.get('/:id', userController.findOne);
router.post('/',userController.create);

