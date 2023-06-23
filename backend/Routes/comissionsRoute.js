const express = require('express');
const comissionsController = require('../Controllers/comissionController');

const router = express.Router();

router.post('/comissions-query',comissionsController);

module.exports = router;