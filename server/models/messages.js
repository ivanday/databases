var db = require('../db');

var getRoomID = (roomname, callback) => {
  db.con.query(`SELECT room_id FROM rooms WHERE roomname = ${roomname}`, function(err, results) {
    if (err) {
      //add room to rooms list if there is no room
      db.con.query(`INSERT INTO rooms (roomname) VALUES ('${roomname}')`);
    } else {
      callback(results);
    }
  });
};

module.exports = {
  getAll: function (callback) {
    db.con.query('SELECT message_id, text, users.username, roomname FROM messages JOIN users ON messages.user_id = users.user_id;', function(err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log('getAll working');
        console.log(results);
        callback(null, results);
      }
    });
  }, // a function which produces all the messages

  create: function (messageObj, callback) {
    console.log(messageObj);
    db.con.query(`INSERT INTO messages (text, user_id, roomname) VALUES ('${messageObj.text}', (SELECT user_id FROM users WHERE username = '${messageObj.username}'), '${messageObj.roomname}');`, (err) => {
      if (err) {
        console.log(err);
        console.log('Error in models messages.create');
      } else {
        callback(null, 'Message added successfully');
      }
    });
  } // a function which can be used to insert a message into the database
};
// console.log(db.con);


// [{id: 1, message: 'hello world', username: 'ivan', roomname: 'lobby'}]