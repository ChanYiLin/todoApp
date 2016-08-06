//define task schema

function taskSchema(mongoose){
	return new mongoose.Schema({
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
	}); 
}

exports.taskSchema = taskSchema;