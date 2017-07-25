// var path = require('path');
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    console.log(req.body);
    console.log(friends);



    // var newFriend = req.body;
    // console.log(newFriend)
    // console.log('res from post', res);
    // console.log('newFriend', newFriend);
  });
};
