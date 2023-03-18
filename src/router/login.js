const express = require('express');

const login = express.Router();

login
  .get('/', (req, res) => {
    res.redirect('/login');
  });

module.exports = { login };
