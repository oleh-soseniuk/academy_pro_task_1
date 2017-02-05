const express = require('express');
const todo = express.Router();

todo.get('/', (req, res, next) => {
	res.render('todos');
});

module.exports = todo;

