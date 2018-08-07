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
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newDog.name = newDog.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newDog);
  
    dogs.push(newDog) ;
  
    res.json(newDog);

    for (var i = 0; i < dogs.length; i++) {
    
    var diff = Math.abs(dogs[i].scores - newDog);
    console.log(diff);
    if (diff < 3 ) {
        var match = dogs[i];
        matchDog.push(match);
        res.json(matchDog);
    }
    
    }
  });
}