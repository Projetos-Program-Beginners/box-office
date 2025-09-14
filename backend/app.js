// Arquivo principal do servidor Express
// TODO: Implementar quando começar o desenvolvimento do backend

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota básica para teste
app.get('/api/test', (req, res) => {
    res.json({ message: 'API funcionando!' });
});

// Rota para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// TODO: Implementar rotas da API
// app.use('/api/movies', require('./routes/movies'));
// app.use('/api/sessions', require('./routes/sessions'));
// app.use('/api/tickets', require('./routes/tickets'));

// Middleware de tratamento de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});

module.exports = app;