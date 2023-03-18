const express = require('express');
const { hashPassword } = require('../bcrypt/hash');

const routers = express.Router();

routers
  .post('/login', async (req, res) => {
    console.log(req.body);
    await hashPassword(req.body.password);
  });

module.exports = { routers };
