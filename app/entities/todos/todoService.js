const todoRepository = require('./todoItemRepository');
const todoValidationService = require('./todoValidationService');

class TodoService {

	getAll(){
		return todoRepository.findAll();
	}

	getById(id){
		return todoRepository.findById(id);
	}

	edit(id, item){
		return new Promise((resolve, reject) => {
			let matched = todoValidationService.containsForbiddenWords(item.text);
			if (matched) {
				resolve(Promise.reject(matched));
			} else {
				resolve(todoRepository.update({_id: id}, item));
			}
		});
	}

	delete(id){
		return todoRepository.delete({_id: id});
	}

	add(item){
		return new Promise((resolve, reject) => {
			let matched = todoValidationService.containsForbiddenWords(item.text);
			if (matched) {
				resolve(Promise.reject(matched));
			} else {
				resolve(todoRepository.add(item));
			}
		});
	}
}

module.exports = new TodoService();