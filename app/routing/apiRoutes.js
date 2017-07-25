// var path = require('path');
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    friends.push(newFriend);

    console.log(newFriend)
    console.log('res from post', res);
    console.log('newFriend', newFriend);
    console.log(res);
    console.log(friends);
  });
};
