const taskModel = require('../models/tarefasModel');

const getAll = async (req, res) => {
    const tarefas = await tarefasModel.getAll();
return response.status(200).json(tarefas);
};

const createTarefas = async (req, res) => {
    //const createdTarefas = await tarefasModel.createTarefas();
    return response.status(201).json(request.body);
};
module.exports = {
    getAll,
    createTarefas
};