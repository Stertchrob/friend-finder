var friends = require("./app/data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
}
app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
});

var user = req.body;

for(var i = 0; i < user.scores.length; i++) {
    user.scores[i] = parseInt(user.scores[i]);
}
var compatibility = 0;
var minDif = 40;

for(var i = 0; i < friends.length; i++) {
    var totalDif = 0;
    for(var j = 0; j < friends[i].scores.length; j++) {
      var dif = Math.abs(user.scores[j] - friends[i].scores[j]);
      totalDif += dif;
}

if(totalDif < minDif) {
    compatibility = i;
    minDif = totalDif;
  }
}

friends.push(user);

    
res.json(friends[compatibility]);


