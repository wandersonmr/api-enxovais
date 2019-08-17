'use strict';

const express = require('express');
const router = express.Router();
const usuario = require('./../src/routes/usuario.routes');

router.use('/usuario', usuario);

module.exports = router;