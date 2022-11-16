// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomsAdded: [],

  initialize: function() {
    // event handlers
    RoomsView.$select.on('change', (event) => {
      RoomsView.handleChange(event);
    });

    RoomsView.$button.on('click', (event) => {
      RoomsView.handleClick(event);
    });
  },

  // add all the rooms we have to the select dropdown menu
  render: function() {
    Object.keys(Rooms._data).forEach((value) => {
      RoomsView.renderRoom(value);
    });
  },


  renderRoom: function(roomname) {
    // Check if room has already been added to the dropdown
    var toAppend = true;
    if (RoomsView.roomsAdded.indexOf(roomname) > -1) {
      toAppend = false;
    }

    // Add room to dropdown
    if (toAppend) {
      RoomsView.$select.append('<option value=' + roomname + '>' + roomname + '</option>');
      RoomsView.roomsAdded.push(roomname);
    }
  },

  handleChange: function(event) {
    // Render selected room
    App.room = $('select option:checked').text();
    MessagesView.render(Rooms._data[App.room]);
  },

  handleClick: function(event) {
    // create alert to get desired room name
    var $alert = $('<alert></alert>');
    var roomName = prompt('Enter room name');

    // create the new room
    Rooms.add(roomName);
    RoomsView.renderRoom(roomName);
    App.room = roomName;
    RoomsView.$select.val(roomName);
  }

};
