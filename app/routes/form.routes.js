const express = require('express');
const router = express.Router();
const FormController = require('../controllers/form');

router.post('/add', FormController.addForm);
router.get('/fetch', FormController.fetchForm);
router.get('/update', FormController.updateForm);
router.get('/remove', FormController.removeForm);

module.exports = router;