var path = require('path');

// Export HTML routes
module.exports = function(app) {

	app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        console.log("home displayed");
	});

	app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        console.log("survey displayed");
	});
};
