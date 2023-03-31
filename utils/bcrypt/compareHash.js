const { compare } = require('bcrypt');

const compareHash = (orginalText, hash) => {
  compare(orginalText, hash, (err, res) => {
    if (res) {
      return true;
    }
    return false;
  });
};

module.exports = { compareHash };
