const express = require('express');
const router = express.Router();
const { home, test, postTest } = require('../controllers/home.controler');

router.get('/', home);
router.get('/test/:id', test);
router.post('/test', postTest);

module.exports = router;
