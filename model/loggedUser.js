const { generateSessionKey } = require('../utils/sessionGenerator/sessionGen');

class LoggedUser {
  constructor(user) {
    this.user = user;
    this.sessionId = generateSessionKey();
  }
}

module.exports = { LoggedUser };
