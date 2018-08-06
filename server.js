var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var dogs = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
    console.log("home displayed");
  });
  
 app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
    console.log("survey displayed");
  });

  // Displays a single character, or shows "No character found"
app.get("/api/dogs/:character", function(req, res) {
    // Grab the selected parameter
    var chosen = req.params.dogs;
    console.log(chosen);
  
    // Filter to show only the selected character
    for (var i = 0; i < dogs.length; i++) {
      if (chosen === dogs[i].name) {
        return res.json(dogs[i]);
      }
    }
  
    // Otherwise display "No character found"
    return res.send("No character found");
  });

  // Create New Characters - takes in JSON input
app.post("/api/dogs", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newDog = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newDog.name = newDog.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newDog);
  
    dogs.push(newDog) ;
  
    res.json(newDog);
  });
//   // Displays all characters
//   app.get("/api/characters", function(req, res) 
//     return res.json(characters);
//   });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  