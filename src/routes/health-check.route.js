const express = require('express');
const router = express.Router();

const controller = require('../controllers/health-check.controller');

router.get('/', async (req, res, next) => {
  try {
    const { status, data } = await controller.healthCheck(req, res);
    next({ status, data });
  } catch (error) {
    console.error(error);
    next({ error });
  }
});

module.exports = router;
