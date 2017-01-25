const users = require('../entities/users/userAPIRoutes');

const initializeRoutes = (app) => {
	app.use('/api/user', users);
}

module.exports = initializeRoutes;