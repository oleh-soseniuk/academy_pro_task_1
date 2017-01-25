const index = require('./index');
const users = require('../entities/users/userViewRoutes');

const initializeRoutes = (app) => {
	app.use('/', index);
	app.use('/user', users);
}

module.exports = initializeRoutes;