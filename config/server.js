'use strict';

const http = require('http');
const app = require('./middlewares');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`API rodando na porta ${process.env.PORT}`);
});
