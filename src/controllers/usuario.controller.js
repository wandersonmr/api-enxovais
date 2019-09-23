'use strict';
const dataBase = require('../../config/data_base');
const response = require('../../config/response');

module.exports.getUsuario = async (req, res) =>{
    try {

        // Realiza a conexao no banco de URLs.
        let conectaURLs = dataBase.getConnection();

        response.montaRetornoAPI({data: "sucesso"}, req, res);
        
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }


}