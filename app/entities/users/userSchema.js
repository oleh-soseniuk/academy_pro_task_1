const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const User = new mongoose.Schema({
	name: String,
	surname: String,
	email: String
});

User.methods.getViewModel = function(){
	return {
		_id: this._id,
		name: this.name,
		surname: this.surname
	};
};

module.exports = mongoose.model('User', User);