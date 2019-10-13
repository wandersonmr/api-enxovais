'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario.controller');

router.get('/', (req, res) => {
    controller.getUsuario(req, res);
});

router.post('/', (req, res) => {
    controller.postUsuario(req, res);
});

router.post('/login', (req, res) => {
    controller.postLogin(req, res);
});

module.exports = router;