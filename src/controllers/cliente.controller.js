'use strict';
const dataBase = require('../../config/data_base');
const response = require('../../config/response');
const clienteModel = require('../models/cliente.model');

module.exports.getCliente = async (req, res) =>{
    try {

        // Realiza a conexao no banco de URLs.
        let conexaoDB = dataBase.getConnection();

        response.montaRetornoAPI({data: "sucesso"}, req, res);
        
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }


}

module.exports.postCliente = async (req, res) => {

    let reqBody = req.body;

    try {
        //conexão com banco
        let conexaoDB = dataBase.getConnection();

        //post Cliente
        await ClienteModel.insertCliente({
            sequelize: conexaoDB,
            body: reqBody
        })


        response.montaRetornoAPI({data: reqBody}, req, res);
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }
}