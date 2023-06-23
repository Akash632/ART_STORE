const express = require('express');
const contactController = require('../Controllers/contactController');

const router = express.Router();

router.post('/contact-us',contactController);

module.exports = router;