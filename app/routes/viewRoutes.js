const users = require('../entities/users/userViewRoutes');

const initializeRoutes = (app) => {
	app.use('/', users);
	app.use('/user', users);
}

module.exports = initializeRoutes;