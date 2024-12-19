const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Conexão com o banco
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao banco MySQL');
});

// Rota 1: Verificar se o convidado existe pelo nome na URL
app.get('/api/convidado/:nome', (req, res) => {
    const { nome } = req.params;
    const sql = 'SELECT * FROM convidados WHERE nome = ?';
    db.query(sql, [nome], (err, results) => {
        if (err) {
            console.error('Erro ao buscar convidado:', err);
            res.status(500).send('Erro ao buscar convidado');
        } else if (results.length === 0) {
            res.status(404).send('Convidado não encontrado');
        } else {
            res.status(200).json(results[0]); // Retorna o convidado encontrado
        }
    });
});

// Rota 2: Confirmar presença e salvar na tabela convites
app.post('/api/confirmar', (req, res) => {
    const { idConvidado } = req.body;
    const sql = 'INSERT INTO convites (id_convidado, data, confirmado) VALUES (?, NOW(), ?)';
    db.query(sql, [idConvidado, true], (err, result) => {
        if (err) {
            console.error('Erro ao confirmar presença:', err);
            res.status(500).send('Erro ao confirmar presença');
        } else {
            res.status(201).send({ message: 'Presença confirmada com sucesso!' });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
