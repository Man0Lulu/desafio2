const connection = require('./connection')

const getAll = async () => {
    const tarefas = await connection.execute('SELECT * FROM tarefas');
    return tarefas[0];
};
const createTarefas = async (tarefas) => {

    const { title } = tarefas;
    
    const dateUTC = new Date(Date.now().toUTCString());

    const query = 'INSERT INTO tarefas(data_criacao, data_atualizado, ultimo_login, token) VALUES(?, ?, ?, ?)';

    const [createTarefas] = await connection.execute(query, [1, 2, 3, 4]);
};

module.exports = {
    getAll,
    createTarefas
};