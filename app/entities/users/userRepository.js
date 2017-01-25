const Repository = require('../../common/Repository');
const UserModel = require('./userSchema');

class UserRepository extends Repository{

	constructor(){
		super();
		this.model = UserModel;
	}

}

module.exports = new UserRepository();