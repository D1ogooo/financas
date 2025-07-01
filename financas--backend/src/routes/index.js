const express = require('express');
const router = express.Router();
const financeController = require('../controllers/finaceController');

router.post('/payments/create', financeController.create);
router.get('/payments/show', financeController.show);

module.exports = router;