const express = require('express');
const user = express.Router();

const userService = require('./userService');

user.get('/', function(req, res, next) {
	res.render('users');
});

user.get('/:id', function(req, res, next) {
	userService.getUserById(req.params.id).then(function(user){
		res.render('user');
	}).catch(function(err){
		res.status(400).end();
	});
});

module.exports = user;
