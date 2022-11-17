var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        console.log('No user found');
      } else {
        res.send(results);
      }
    });
  },
  post: function (req, res) {
    let username = req.body['username'];
    models.users.create(username, (err) => {
      if (err) {
        console.log('Failed to add user');
      } else {
        console.log('User added successfully');
        res.end();
      }
    });
  }
};
