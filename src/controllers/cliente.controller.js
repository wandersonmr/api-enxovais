'use strict';
const dataBase = require('../../config/data_base');
const response = require('../../config/response');
const clienteModel = require('../models/cliente.model');

module.exports.getClienteByCpf = async (req, res) =>{

    let reqQuery = req.query;

    try {

        // Realiza a conexao no banco de URLs.
        let conexaoDB = dataBase.getConnection();
        
        let cliente = await clienteModel.getClienteByCpf({
            sequelize: conexaoDB,
            cpf: reqQuery.cpf
        })

        response.montaRetornoAPI({data: cliente}, req, res);
        
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
        await clienteModel.insertCliente({
            sequelize: conexaoDB,
            body: reqBody
        })


        response.montaRetornoAPI({data: reqBody}, req, res);
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }
}

module.exports.putCliente = async (req, res) => {

    let reqBody = req.body;

    try {
        //conexão com banco
        let conexaoDB = dataBase.getConnection();

        //post Cliente
        await clienteModel.updateCliente({
            sequelize: conexaoDB,
            body: reqBody
        })


        response.montaRetornoAPI({data: reqBody}, req, res);
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }
}