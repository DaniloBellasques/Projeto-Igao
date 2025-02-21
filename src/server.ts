import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mysql from 'mysql2';
import session from 'express-session';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));




server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
    session({
        secret: 'chave-secreta',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

// 📌 Configuração do Banco de Dados
export const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DB || 'podologia',
    port: Number(process.env.MYSQL_PORT) || 3306
});

// Teste de conexão
db.connect((err) => {
    if (err) {
        console.error('❌ Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('✅ Banco de dados conectado com sucesso!');
    }
});

import mainRoutes from './routes/index';
server.use(mainRoutes);

server.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
