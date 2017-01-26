const express = require('express');
const user = express.Router();

const userService = require('./userService');

user.get('/', (req, res, next) => {
	userService.getAllUsers().then((users) => {
		res.send(users);
	}).catch((err) => {
		res.status(400).end();
	});
});

user.post('/', (req, res, next) => {
	userService.addUser(req.body).then((user) => {
		res.status(201).send(user);
	}).catch((err) => {
		res.status(400).end();
	});
});

user.get('/:id', (req, res, next) => {
	userService.getUserById(req.params.id).then((user) => {
		res.send(user);
	}).catch((err) => {
		res.status(400).end();
	});
});

user.put('/:id', (req, res, next) => {
	userService.editUser(req.params.id, req.body).then(() => {
		res.end();
	}).catch((err) => {
		res.status(400).end();
	});
});

user.delete('/:id', (req, res, next) => {
	userService.deleteUser(req.params.id).then(() => {
		res.status(200).end();
	}).catch((err) => {
		res.status(400).end();
	});
});

module.exports = user;
