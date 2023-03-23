const express = require('express');

const loginRedirection = express.Router();

loginRedirection
  .get('/', (req, res) => {
    res.redirect('/log-in');
  });

module.exports = { loginRedirection };
