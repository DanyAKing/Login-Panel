const express = require('express');
const { readFile } = require('fs').promises;
const { hashPassword } = require('../bcrypt/hash');
const { compareHash } = require('../bcrypt/compareHash');

const loginRouters = express.Router();

loginRouters
  .post('/login', async (req, res) => {
    const getPass = await readFile('data/password.json', 'utf-8');
    compareHash(req.body.password, JSON.parse(getPass));
  });

module.exports = { loginRouters };
