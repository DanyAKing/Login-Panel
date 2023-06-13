const express = require('express');

const registerationRouters = express.Router();

registerationRouters
  .get('/join', async (req, res) => {
    res.render('registration/registrationView');
  })
  .post('/join/create', async (req, res) => {
    console.log(req.body);
  });

module.exports = { registerationRouters };
