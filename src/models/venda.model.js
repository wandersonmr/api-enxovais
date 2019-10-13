'use strict'
const moment = require('moment');

module.exports.insertVenda = (args) => {

    return args.sequelize.query(
        `INSERT INTO Venda (UsuarioID, Nome, CPF, Rua, Item, valorTotal, valorRestante, DataPagamento, DataVenda)
        values(:usuarioID, :nome, :cpf, :rua, :item, :valorTotal, :valorRestante, :dataPagamento, :dataVenda)`,{
            replacements:{
                usuarioID: args.body.usuarioID,
                nome: args.body.nome,
                rua: args.body.rua,
                item: args.body.item,
                valorTotal: args.body.valorTotal,
                valorRestante: args.body.valorRestante,
                dataPagamento: args.body.dataPagamento,
                dataVenda: args.body.dataVenda,
                cpf: args.body.cpf
            },
        }

    ).catch(erro => {
        throw new Error(erro);
    });
}

module.exports.getVendaByData = (args) => {

    return args.sequelize.query(
        `SELECT * 
        FROM Venda 
        WHERE DataPagamento = :dataPagamento`,{
            type: args.sequelize.QueryTypes.SELECT,
            replacements:{
                dataPagamento: args.body.dataPagamento
            }
            
        }
    ).catch(erro => {
        throw new Error(erro);
    });
}