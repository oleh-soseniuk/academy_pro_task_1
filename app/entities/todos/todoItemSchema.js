const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const TodoItem = new mongoose.Schema({
	name: String,
	text: String
});

TodoItem.methods.getViewModel = function(){
	return {
		_id: this._id,
		text: this.text
	};
};

module.exports = mongoose.model('TodoItem', TodoItem);