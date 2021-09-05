const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.LoginUser);

module.exports = router;