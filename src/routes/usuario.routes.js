'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario.controller');

router.get('/', (req, res) => {
    controller.getUsuario(req, res);
});

module.exports = router;