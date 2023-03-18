const { hash } = require('bcrypt');
const { writeFile } = require('fs').promises;

const hashPassword = async (orginalText) => {
  hash(orginalText, 10, async (err, hash) => {
    if (err) {
      throw new Error(err);
    } else {
      await writeFile('data/password.txt', hash, 'utf-8');
      // console.log(hash);
    }
  });
};

module.exports = { hashPassword };

// compare(orginalText, password, (err, res) => {
//   if (res) console.log('Passwords is correct');
//   else console.log('Incorrect passowrd');
// });
// });
