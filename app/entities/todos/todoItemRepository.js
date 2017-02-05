const Repository = require('../../common/Repository');
const TodoItemModel = require('./todoItemSchema');

class TodoItemRepository extends Repository {

	constructor(){
		super();
		this.model = TodoItemModel;
	}
}

module.exports = new TodoItemRepository();