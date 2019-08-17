'use strict';

const response = require('../../config/response');

module.exports.getUsuario = async (req, res) =>{
    
    response.montaRetornoAPI({data: "sucesso"}, req, res);
}