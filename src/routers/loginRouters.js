const express = require('express');
const { hashPassword } = require('../bcrypt/hash');

const loginRouters = express.Router();

loginRouters
  .post('/login', async (req, res) => {
    console.log(req.body);
    // await hashPassword(req.body.password);
  });

module.exports = { loginRouters };
