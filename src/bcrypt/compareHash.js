const { compare } = require('bcrypt');

const compareHash = async (orginalText, password) => {
  compare(orginalText, password, (err, res) => {
    res ? console.log('ok') : console.log('not ok');
  });
};

module.exports = { compareHash };
