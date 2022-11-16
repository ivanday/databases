// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

  _data: [],

  toggleStatus: function (username) {
    // check _data, push if not there, remove if it is
    // if pushed, set

    //store the index of username given in our friends data
    var index = Friends._data.indexOf(username);

    //check if data exists
    if (index === -1) {
      //if it doesn't add our friend to our array
      Friends._data.push(username);
    } else {
      //'toggle' friend off by removing it from our friends array
      Friends._data.splice(index, 1);
    }
    //App fetch to refresh the feed with css changes
    App.fetch();
  }

};