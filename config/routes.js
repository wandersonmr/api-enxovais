'use strict';

const express = require('express');
const router = express.Router();
const usuario = require('./../src/routes/usuario.routes');
const cliente = require('./../src/routes/cliente.routes');

router.use('/usuario', usuario);
router.use('/usuario', cliente);


module.exports = router;