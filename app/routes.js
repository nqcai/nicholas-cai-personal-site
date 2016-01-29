// Set up dependencies
var mongoose 				= require('mongoose');
var Project 				= require('./Project.js');
var Experience 			= require('./Experience.js');
var Hack		 				= require('./Hack.js');

// Open app routes
module.exports = function(app) {

	// GET Routes
	// ----------------------------------------

	// Retrieve all projects in db
	app.get('/projects', function(req, res) {
		var query = Project.find({}); // empty conditions
		query.exec(function(err, projects) {
			if (err) res.send(err);
			res.json(projects);
		});
	});

	// Retrieve all experiences in db
	app.get('/experiences', function(req, res) {
		var query = Experience.find({});
		query.exec(function(err, experiences) {
			if (err) res.send(err);
			res.json(experiences);
		});
	});

	// Retrieve all hacks in db
	app.get('/hacks', function(req, res) {
		var query = Hack.find({});
		query.exec(function(err, hacks) {
			if (err) res.send(err);
			res.json(hacks);
		});
	});


	// POST Routes
	// ----------------------------------------

	// Creates some sample projects
	app.post('/projects', function(req, res) {
		var new_project = new Project(req.body);
		new_project.save(function(err) {
			if (err) res.send(err);
			res.json(req.body);
		});
	});

	// Creates some sample experiences
	app.post('/experiences', function(req, res) {
		var new_experience = new Experience(req.body);
		new_experience.save(function(err) {
			if (err) res.send(err);
			res.json(req.body);
		});
	});

	// Creates some sample hacks
	app.post('/hacks', function(req, res) {
		var new_hack = new Hack(req.body);
		new_hack.save(function(err) {
			if (err) res.send(err);
			res.json(req.body);
		});
	});

	// Various practical POST routes will go here...

};











