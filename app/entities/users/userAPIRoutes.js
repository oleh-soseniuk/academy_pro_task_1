const express = require('express');
const user = express.Router();

const userService = require('./userService');

user.get('/', function(req, res, next) {
	userService.getAllUsers().then(function(users){
		res.send(users);
	}).catch(function(err){
		res.status(400).end();
	});
});

user.post('/', function(req, res, next) {
	userService.addUser(req.body).then(function(user){
		res.status(201).send(user);
	}).catch(function(err){
		res.status(400).end();
	});
});

user.get('/:id', function(req, res, next) {
	userService.getUserById(req.params.id).then(function(user){
		res.send(user);
	}).catch(function(err){
		res.status(400).end();
	});
});

user.put('/:id', function(req, res, next) {
	userService.editUser(req.params.id, req.body).then(function(){
		res.end();
	}).catch(function(err){
		res.status(400).end();
	});
});

user.delete('/:id', function(req, res, next) {
	userService.deleteUser(req.params.id).then(function(){
		res.status(200).end();
	}).catch(function(err){
		res.status(400).end();
	});
});

module.exports = user;
