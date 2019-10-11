'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente.controller');

router.get('/', (req, res) => {
    controller.getCliente(req, res);
});

router.post('/', (req, res) => {
    controller.postCliente(req, res);
});

module.exports = router;