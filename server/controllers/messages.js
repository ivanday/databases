var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('before getAll call in get controllers/messages');
    models.messages.getAll((err, data)=> {
      if (err) {
        console.log('error getting data in controllers/messages');
      } else {
        res.end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, (err, data) => {
      if (err) {
        res.send('messages not add');
      } else {
        //res.send('messages added');
        console.log('messages added');
        res.end();
      }
    });

  } // a function which handles posting a message to the database
};
