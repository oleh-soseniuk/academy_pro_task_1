const users = require('../entities/users/userViewRoutes');
const todos = require('../entities/todos/todoViewRoutes');

const initializeRoutes = (app) => {
	app.use('/user', users);
	app.use('/todo', todos);
	app.use('/', users);
}

module.exports = initializeRoutes;