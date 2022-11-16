// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: function (message) {
    return $(`
      <div class="chat">
        <div class="username">${DOMPurify.sanitize(message.username)}</div>
        <div>${DOMPurify.sanitize(message.text)}</div>
      </div>
    `);
  }

};