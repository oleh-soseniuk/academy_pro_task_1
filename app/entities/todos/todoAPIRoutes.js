const express = require('express');
const todo = express.Router();
const todoService = require('./todoService');

module.exports = function(app){

	todo.get('/', (req, res, next) => {
		todoService.getAll().then((todoList) => {
			res.send(todoList);
		}).catch((err) => {
			res.status(400).end();
		});
	});

	todo.post('/', (req, res, next) => {
		todoService.add(req.body).then((item) => {
			console.log('item',item);
			res.status(201).send(item);
			app.io.emit('todo:created', item);
		}).catch((err) => {
			console.log('err',err);
			res.status(400).send(err);
		});
	});

	todo.get('/:id', (req, res, next) => {
		todoService.getById(req.params.id).then((item) => {
			res.send(item);
		}).catch((err) => {
			res.status(400).end();
		});
	});

	todo.put('/:id', (req, res, next) => {
		todoService.edit(req.params.id, req.body).then((item) => {
			res.end();
			app.io.emit('todo:updated', {id:req.params.id, text: req.body.text});
		}).catch((err) => {
			res.status(400).send(err);
		});
	});

	todo.delete('/:id', (req, res, next) => {
		todoService.delete(req.params.id).then(() => {
			res.status(200).end();
			app.io.emit('todo:deleted', {id: req.params.id});
		}).catch((err) => {
			res.status(400).end();
		});
	});
	return todo;

}


//module.exports = todo;
