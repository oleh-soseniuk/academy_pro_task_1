const userRepository = require('./userRepository');

class UserService {

	getAllUsers(){
		return userRepository.findAll();
	}

	getUserById(id){
		return userRepository.findById(id);
	}

	editUser(id, user){
		return userRepository.update({_id: id}, user);
	}

	deleteUser(id){
		return userRepository.delete({_id: id});
	}

	addUser(user){
		return userRepository.add(user);
	}
}

module.exports = new UserService();