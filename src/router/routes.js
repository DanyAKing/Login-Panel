const express = require('express');

const routers = express.Router();

routers
  .post('/login', async (req, res) => {
    console.log(req.body);
  });

module.exports = { routers };
