const express = require('express');

const loginRedirection = express.Router();

loginRedirection
  .get('/', (req, res) => {
    res.redirect('/login');
  });

module.exports = { loginRedirection };
