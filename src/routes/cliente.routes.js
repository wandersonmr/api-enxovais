'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente.controller');

router.get('/', (req, res) => {
    controller.getClienteByCpf(req, res);
});

router.post('/', (req, res) => {
    controller.postCliente(req, res);
});

router.put('/', (req, res) => {
    controller.putCliente(req, res);
});


module.exports = router;