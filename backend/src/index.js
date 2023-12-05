const express = require('express');

const app = express();

app.get('/', (request, response) =>response.status(200).send('servidor rodando na porta 2025 :)') )

app.listen(2025, () => console.log('servidor rodando na porta 2025 :)'));