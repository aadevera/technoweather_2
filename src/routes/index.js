const express = require('express');
const router = express.Router();

router.use('/health', require('./health-check.route'));

module.exports = router;
