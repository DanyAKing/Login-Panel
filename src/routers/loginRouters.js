const express = require('express');
const { User } = require('../user/currentUser');

const loginRouters = express.Router();

loginRouters
  .get('/', (req, res) => {
    res.render('login/loginView');
  })
  .post('/', async (req, res) => {
    const user = new User(req.body);
    console.log(user.checkUser());
  });

module.exports = { loginRouters };
