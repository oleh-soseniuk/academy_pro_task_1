const express = require('express');
const user = express.Router();

const userService = require('./userService');

user.get('/', (req, res, next) => {
	res.render('users');
});

user.get('/:id', (req, res, next) => {
	userService.getUserById(req.params.id).then((user)=> {
		res.render('user');
	}).catch((err) => {
		res.status(400).end();
	});
});

module.exports = user;
