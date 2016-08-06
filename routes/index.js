var express = require('express');
var router = express.Router();

// Models
var Task = require('../models').Task;
/*
	name: String,
	done: Boolean,
	note: String,
	createAt:{
		type: Date,
		default: Date.now
	},
	updateAt:{
		type: Date,
  		default: Date.now
	}

*/

/* GET / show_list */
router.get('/', function(req, res, next){
	Task.find()
		.sort({
			createdAt: 'desc'
		})
		.
		exec(function(err, items){
			if (err) console.log(err);

			res.render('index', {
				tasks: tasks
			});
		});
});

/* GET /:id show_task */
router.get('/:id/show', function(req, res, next){
	var id = req.param.id;
	Task.findById(id, function(err,task){
		if(err) console.log(err);
		res.json(task);
	});
});

/* 
	POST / create 
*/
router.post('/', function(req, res, next){
	var name = req.body.name;
	var note = req.body.note;
	
	var task = new Task({
		name: name,
		done: false,
		note: note
	});

	task.save(function(err){
		if (err) console.log(err);

		res.redirect('/');
	});
});

/* 
	Done
	PUT /:id update 
*/
router.put('/:id/done', function(req, res, next){
	var id = req.param.id;
	Task.findOneAndUpdate({
		_id: id;
	},{
		done: true;
	},function(err, task){
		if(err) console.log(err);

		console.log(task);
		res.json(true);
	});
});

/* 
	UnDone
	PUT /:id update 
*/
router.put('/:id/undone', function(req, res, next){
	var id = req.param.id;
	Task.findOneAndUpdate({
		_id: id;
	},{
		done: false;
	},function(err, task){
		if(err) console.log(err);
		
		console.log(task);
		res.json(true);
	});
});

/* 
	Update
	PUT /:id update 
*/
router.put('/:id/update', function(req, res, next){
	var id = req.param.id;

	var note = req.body;
	Task.findOneAndUpdate({
		_id: id
	},{
		note: note
	},function(err, task){
		if(err) console.log(err);
		
		console.log(task);
		res.json(true);
	});
});


/* Delete /:id delete */
router.delete('/:id/delete', function(req, res, next){
	var id = req.param.id;

	Task.findByIdAndRemove(id, function(err){
		if(err) console.log(err);
		res.json(true);
	});
});



module.exports = router;
