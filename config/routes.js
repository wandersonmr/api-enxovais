'use strict';

const express = require('express');
const router = express.Router();
const usuario = require('./../src/routes/usuario.routes');
const cliente = require('./../src/routes/cliente.routes');
const venda = require('./../src/routes/venda.routes');

router.use('/usuario', usuario);
router.use('/cliente', cliente);
router.use('/venda', venda);

module.exports = router;