const express = require('express');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Verifique se a conexão foi bem-sucedida
db.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Middleware para requisições JSON e cookies
app.use(express.json());
app.use(cookieParser());

// Definir um cookie em um endpoint
app.get('/set-cookie', (req, res) => {
    res.cookie('cookieName', 'cookieValue', {
        sameSite: 'None', // Necessário para uso entre sites
        secure: true,     // Requer HTTPS
        httpOnly: true,   // Protege contra acesso via JavaScript
        maxAge: 3600000,  // Expira em 1 hora
    });
    res.send('Cookie configurado com sucesso!');
});

// Endpoint para obter o cookie
app.get('/get-cookie', (req, res) => {
    const cookieValue = req.cookies['cookieName'];
    res.json({ cookieValue });
});

// Endpoint de teste para acessar o banco de dados
app.get('/api/teste', (req, res) => {
    db.query('SELECT NOW() AS currentTime', (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta:', err);
            return res.status(500).json({ error: 'Erro no banco de dados' });
        }
        res.json({ currentTime: results[0].currentTime });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
