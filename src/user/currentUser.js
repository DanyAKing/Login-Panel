const { readFile } = require('fs').promises;
const { compareHash } = require('../../utils/bcrypt/compareHash');

class User {
  constructor(userData) {
    this.username = userData.username;
    this.password = userData.password;
    this.loadHash();
  }

  loadHash = async () => {
    this.hash = await readFile('data/password.json', 'utf-8');
  };

  checkUser = () => {
    compareHash(this.password, this.hash);
  };
}

module.exports = { User };
