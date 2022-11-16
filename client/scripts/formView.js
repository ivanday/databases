// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    //when clicking submit, run our handleSubmit function
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // get username, get room name, get message text
    var data = {
      username: App.username,
      roomname: App.room,
      text: $('#message').val()
    };

    // send POST request
    Parse.post(data, (response) => {
      console.log(response);
      App.fetch();
    });

    //reset message field to blank
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};