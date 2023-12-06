const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 2025;

app.listen(2025, () => console.log(`Server está rodando na porta ${PORT}`))