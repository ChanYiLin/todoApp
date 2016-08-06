/* connect to mongo db */

var mongoose = require('mongoose');

// Default setting
var config = require('../config/local');

// Connect to mongoDB
mongoose.connect('mongodb://' + config.mongo.host + '/' + config.mongo.database);

// Bind DB connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
	console.log('mongoDB connected');
});

// Require schema
var taskSchema = require('./task').itemSchema(mongoose);

// Model class
var Task = mongoose.model('Task', itemSchema);

// Exports
exports.Task = Task;