// Pulls Mongoose dependency for creating Schemas
var mongoose 			= require('mongoose');
var Schema 				=	 mongoose.Schema;

// Creates an Experience Schema. How an Experience block is stored in db
var ExperienceSchema = new Schema({

	title: 				{type: String, 			require: true},
	start_date: 	{type: Date, 				require: true},
	end_date: 		{type: Date, 				require: false},
	location: 		{type: String, 			require: false},
	company: 			{type: String, 			require: false},
	description: 	{type: String, 			require: true},
	link: 				{type: String, 			require: false},
	tech_used: 		{type: [String],		require: true},
	lang_used: 		{type: [String], 		require: true},
	upvotes: 			{type: Number, 			require: true},
	comments: 		{type: [String], 		require: true}

});

// Export the ExperienceSchema for use elsewhere
module.exports = mongoose.model('experience', ExperienceSchema);