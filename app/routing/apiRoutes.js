var path = require('path');

var dogs = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/dogs', function(req, res) {
    res.json(dogs);
    
	});
  
  // Create New Characters - takes in JSON input
  app.post("/api/dogs", function(req, res) {
    
    var newDog = req.body;
    var newScore = newDog.scores;
    var match = '';
    var matchPic = '';
    var diff = 0;

    for (var i = 0; i < dogs.length; i++) {
      console.log(dogs[i].name);
      for (var j = 0; j < 10; j++) {
    diff += Math.abs(parseInt(dogs[i].scores[j]) - parseInt(newScore[j]));
    console.log(parseInt(diff));
   if (diff < 4){
        match = dogs[i].name;
        matchPic = dogs[i].photo;
        res.json(match + matchPic);
   }

   else {
     res.json("Sorry, you do not have any matches!")
   }
  

  }
    }
  });
}