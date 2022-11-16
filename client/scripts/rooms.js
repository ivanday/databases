// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // room: [{message}, {message}]
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  addRooms: function(nameOfRoom) {
    Rooms._data[nameOfRoom] = [];
  },

  add: function (name) {
    console.log('appease spec runner');
    Rooms.addRooms(name);
  },

  updateList: function(message) {
    if (Rooms._data[message.roomname] === undefined) {
      Rooms.addRooms(message.roomname);
    }
    Rooms._data[message.roomname].push(message);

  }

  // takes in a message, adds that message to the room's bucket
  // msg: room = lobby, text = "hi" -> _data[msg.room].push(msg)

};