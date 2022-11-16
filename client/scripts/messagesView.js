// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render(Messages._data);
  },

  render: function(messagesArr = Messages._data) {
    // TODO: Render _all_ the messages.

    //empty our current messages so when we add new ones there arn't duplicate in the webpage
    MessagesView.$chats.empty();

    // render stored messages to the page
    for (var i = messagesArr.length - 1; i >= 0; i--) {
      MessagesView.renderMessage(messagesArr[i]);
    }

  },

  renderMessage: function(message) {
    // JQuery object to store a single message
    var chatMessage = $(MessageView.render(message));

    // Check if the sender is in the friends list
    if (Friends._data.indexOf(chatMessage[0].children[0].innerHTML) > -1) {
      chatMessage.toggleClass('friend');
    }

    // click handler to add friends
    chatMessage.on('click', (event) => {
      MessagesView.handleClick(event);
    });

    //append that object to chats
    MessagesView.$chats.append(chatMessage);
  },

  handleClick: function(event) {
    // add or remove a user from the friends list
    Friends.toggleStatus(event.currentTarget.children[0].innerHTML);
  }

};