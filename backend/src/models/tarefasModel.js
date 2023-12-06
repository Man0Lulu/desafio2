const connection = require('./connection')

const getAll = async () => {
    const tarefas = await connection.execute('SELECT * FROM tarefas');
    return tarefas[0];
};

module.exports = {
    getAll
};