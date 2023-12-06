const taskModel = require('../models/tarefasModel');
const getAll = async (req, res) => {
    const tarefas = await taskModel.getAll();
return response.status(200).json(tasks);
};

module.exports = {
    getAll
};