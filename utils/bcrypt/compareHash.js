const { compare } = require('bcrypt');
const { LoggedUser } = require('../../model/loggedUser');

const compareHash = (orginalText, hash, username) => {
  compare(orginalText, hash, (err, res) => {
    if (res) {
      const user = new LoggedUser(username);
      console.log(user);
    }
    return false;
  });
  return { compare };
};

module.exports = { compareHash };
