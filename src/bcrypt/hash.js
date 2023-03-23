const { hash } = require('bcrypt');
const { writeFile } = require('fs').promises;

const hashPassword = async (orginalText) => {
  hash(orginalText, 10, async (err, hash) => {
    if (err) {
      throw new Error(err.message);
    } else {
      await writeFile('data/password.json', JSON.stringify(hash), 'utf-8');
    }
  });
};

module.exports = { hashPassword };
