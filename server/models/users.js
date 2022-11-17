var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.con.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.log('Error:', err);
      } else {
        callback(null, results);
      }
    });
  },
  create: function (user, callback) {
    db.con.query(`INSERT INTO users (username) VALUES ('${user}')`, (err) => {
      if (err) {
        console.log(err);
        console.log('Error in models users');
      } else {
        console.log(`User: ${user} added`);
        callback(null);
      }
    });
  }
};
