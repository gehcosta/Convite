const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


// Verifique se a conexão foi bem-sucedida
db.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Middleware para permitir requisições JSON
app.use(express.json());

// // Rota de exemplo para obter informações do convidado
// app.get('/api/convidado/:nome', (req, res) => {
//     const nomeConvidado = req.params.nome;
//
//     // Query SQL para buscar o convidado
//     db.query('SELECT * FROM convidados WHERE nome = ?', [nomeConvidado], (err, results) => {
//         if (err) {
//             console.error('Erro ao consultar o banco de dados', err);
//             return res.status(500).send('Erro ao acessar o banco de dados');
//         }
//
//         if (results.length > 0) {
//             res.json({ nome: results[0].nome, id: results[0].id });
//         } else {
//             res.status(404).send('Convidado não encontrado');
//         }
//     });
// });
//
// // Rota para inserir um novo convidado
// app.post('/api/inserir', (req, res) => {
//     const { nome } = req.body;
//
//     // Query SQL para inserir o convidado
//     db.query('INSERT INTO convidados (nome) VALUES (?)', [nome], (err, results) => {
//         if (err) {
//             console.error('Erro ao inserir convidado', err);
//             return res.status(500).send('Erro ao inserir convidado');
//         }
//
//         res.json({ message: 'Convidado confirmado!', id: results.insertId });
//     });
// });

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
