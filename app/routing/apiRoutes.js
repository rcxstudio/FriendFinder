// var path = require('path');
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log('req.body', req.body);
    // console.log('req', req);
    // console.log('res', res);

    var newFriend = req.body;
    friends.push(newFriend);
    var lastFriendIndexValue = friends.length - 1;
    console.log(friends);
    var totalDifference = 200;
    var tempScore = 0;
    var bestFriend;
    for (var i = 0; i < lastFriendIndexValue; i++) {
      for (var j = 0; j < friends[i].scores.length; j++) {
        tempScore += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friends[lastFriendIndexValue].scores[j])));
        // console.log(friends[i].scores[j]);
        // console.log('addedFriend', friends[lastFriendIndexValue].scores[j]);
      }

      if (tempScore < totalDifference) {
        totalDifference = tempScore;
        bestFriend = friends[i];
        console.log('Best Friend', bestFriend);
        // return bestFriend;
      }
      console.log('tempScore', tempScore);
      tempScore = 0;
    }

    res.send(bestFriend);
  });
};
