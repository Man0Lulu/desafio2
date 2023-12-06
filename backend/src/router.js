const express = require('express');
const tasksController = require('./controllers/tarefasController');

const router = express.Router();

const tarefasController = require('./controllers/tarefasController')

router.get('/tarefas', tarefasController.getAll);

module.exports = router;