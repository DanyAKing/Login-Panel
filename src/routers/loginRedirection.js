const express = require('express');

const loginRedirection = express.Router();

loginRedirection
  .get('/', (req, res) => {
    // res.redirect('/log-in');
    res.send('ok');
  });

module.exports = { loginRedirection };
