var path = require('path');

var dogs = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/dogs', function(req, res) {
    res.json(dogs);
    
	});
  
  // Create New Characters - takes in JSON input
  app.post("/api/dogs", function(req, res) {
    
    var newDog = req.body;
    var matchDog = '';
    var match = '';

    for (var i = 0; i < dogs.length; i++) {
    var newInt = parseInt(newDog.q1 + newDog.q2 + newDog.q3 + newDog.q4 + newDog.q5 + newDog.q6 + newDog.q7 + newDog.q8 + newDog.q9 + newDog.q10)
    var diff = Math.abs(parseInt(dogs[i].scores) - parseInt(newInt));
    console.log(parseInt(diff));
    if (diff < 3 ) {
        var match = dogs[i];
        matchDog.push(match);
        res.json(matchDog);
    }
    
    }
  });
}