const { hash } = require('bcrypt');
const { writeFile } = require('fs').promises;

const hashPassword = async (orginalText) => {
  hash(orginalText, 10, async (err, hash) => {
    if (err) {
      throw new Error(err.message);
    } else {
      await writeFile('src/bcrypt/data/password.json', JSON.stringify(hash), 'utf-8');
    }
  });
};

module.exports = { hashPassword };

// compare(orginalText, password, (err, res) => {
//   if (res) console.log('Passwords is correct');
//   else console.log('Incorrect passowrd');
// });
// });
