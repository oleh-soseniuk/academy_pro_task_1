const users = require('../entities/users/userAPIRoutes');
const todos = require('../entities/todos/todoAPIRoutes');
const initializeRoutes = (app, io) => {
	app.use('/api/user', users);
	app.use('/api/todo', todos(app));
}

module.exports = initializeRoutes;