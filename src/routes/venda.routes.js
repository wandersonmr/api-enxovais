'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/venda.controller');

router.get('/', (req, res) => {
    controller.getVendaByData(req, res);
});

router.post('/', (req, res) => {
    controller.postVenda(req, res);
});

router.put('/', (req, res) => {
    controller.putVenda(req, res);
});

module.exports = router;