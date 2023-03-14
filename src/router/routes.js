const express = require('express');

const routers = express.Router();

routers
  .get('/', async (req, res) => {
    console.log('hi');
  });

module.exports = { routers };
