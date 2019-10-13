'use strict';
const dataBase = require('../../config/data_base');
const response = require('../../config/response');
const vendaModel = require('../models/venda.model');

module.exports.getVendaByData = async (req, res) =>{

    let reqQuery = req.query;

    try {

        // Realiza a conexao no banco de URLs.
        let conexaoDB = dataBase.getConnection();
        
        let listVendas = await vendaModel.getVendaByData({
            sequelize: conexaoDB,
            body: reqQuery
        })

        response.montaRetornoAPI({data: listVendas}, req, res);
        
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }


}

module.exports.postVenda = async (req, res) => {

    let reqBody = req.body;

    try {
        //conexão com banco
        let conexaoDB = dataBase.getConnection();

        //post Venda
        await vendaModel.insertVenda({
            sequelize: conexaoDB,
            body: reqBody
        })


        response.montaRetornoAPI({data: reqBody}, req, res);
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }
}