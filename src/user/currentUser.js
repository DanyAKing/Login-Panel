const { readFile } = require('fs').promises;
const { join } = require('path');
const { compareHash } = require('../../utils/bcrypt/compareHash');

class User {
  constructor(userData) {
    this.currentData = join(__dirname, '../../data', userData);
    this.loadHash();
  }

  loadHash = async () => {
    this.hash = JSON.parse(await readFile(this.currentData, 'utf-8'));
  };

  checkAccess = (data) => {
    const { username, password: orginalText } = data;
    compareHash(orginalText, this.hash, username);
  };
}

const user = new User('password.json');

module.exports = { user };
