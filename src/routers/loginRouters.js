const express = require('express');
const { user } = require('../user/currentUser');

const loginRouters = express.Router();

loginRouters
  .get('/', (req, res) => {
    res.render('login/loginView');
  })
  .post('/', async (req, res) => {
    const u = user.checkAccess(req.body);
    if (u === false) {
      console.log('Incorrect');
    }
  });

module.exports = { loginRouters };
