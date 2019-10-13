'use strict';
const dataBase = require('../../config/data_base');
const response = require('../../config/response');
const usuarioModel = require('../models/usuario.model');

module.exports.getUsuario = async (req, res) =>{
    try {

        // Realiza a conexao no banco de URLs.
        let conexaoDB = dataBase.getConnection();

        response.montaRetornoAPI({data: "sucesso"}, req, res);
        
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }


}

module.exports.postUsuario = async (req, res) => {

    let reqBody = req.body;

    try {
        //conexão com banco
        let conexaoDB = dataBase.getConnection();

        //post usuario
        await usuarioModel.insertUsuario({
            sequelize: conexaoDB,
            body: reqBody
        })


        response.montaRetornoAPI({data: reqBody}, req, res);
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }
}

module.exports.postLogin = async (req, res) => {

    let reqBody = req.body;

    try {
        //conexão com banco
        let conexaoDB = dataBase.getConnection();

        //post usuario
        let usuario = await usuarioModel.getLogin({
            sequelize: conexaoDB,
            body: reqBody
        })

        if(!usuario)
        throw new Error('Usuario e/ou senha incorretos.');

        response.montaRetornoAPI({data: "Sucesso"}, req, res);
    } catch (erro) {
        response.montaRetornoAPI({ status: 400, erro }, req, res);
    }
}