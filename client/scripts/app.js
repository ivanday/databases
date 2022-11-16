// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),
  username: 'anonymous',
  room: 'lobby',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 5000);
    //console.log('test');

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      var toPush = false;
      //checks if lastmessage exists, if it does then set it to the last message id, otherwise it is undefined
      var lastMessageID = Messages._data[Messages._data.length - 1] ? Messages._data[Messages._data.length - 1]['message_id'] : undefined;

      //iterate over new data received from server
      for (var i = data.length - 1; i >= 0; i--) {
        //check for the last message ID sent and set boolean for subsequent messages to be pushed
        if (data[i].message_id === lastMessageID) {
          toPush = true;
        } else if (toPush || lastMessageID === undefined) {
          //push message and update room
          Messages.push(data[i]);
          Rooms.updateList(data[i]);
        }
      }

      // Re-render the rooms list and the messages
      RoomsView.render();
      MessagesView.render(Rooms._data[App.room]);

    });
    App.stopSpinner();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
