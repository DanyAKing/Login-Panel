const crypto = require('crypto');
const express = require('express');
const { readFile } = require('fs').promises;
// const { hashPassword } = require('../bcrypt/hash');
const { compareHash } = require('../bcrypt/compareHash');

const loginRouters = express.Router();

const generateKey = () => crypto.randomBytes(16).toString('base64');

loginRouters
  .get('/', (req, res) => {
    res.render('login/loginPanel');
  })
  .post('/', async (req, res) => {
    const getPass = await readFile('data/password.json', 'utf-8');
    compareHash(req.body.password, JSON.parse(getPass));
    const sessionId = generateKey();
    res.redirect(`/login/${sessionId}`);
  });

module.exports = { loginRouters };
