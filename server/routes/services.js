const express = require('express');
const auth = require('../middleware/auth');
const { Service } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.post('/', auth, async (req, res) => {
  const service = await Service.create(req.body);
  res.json(service);
});

module.exports = router;
