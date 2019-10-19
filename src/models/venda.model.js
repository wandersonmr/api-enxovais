'use strict'
const moment = require('moment');

module.exports.insertVenda = (args) => {

    return args.sequelize.query(
        `INSERT INTO Venda (UsuarioID, Nome, CPF, Rua, Numero, Bairro, Item, ValorTotal, ValorRestante, ValorParcela, DataPagamento, DataVenda)
        values(:usuarioID, :nome, :cpf, :rua, :numero, :bairro, :item, :valorTotal, :valorRestante, :valorParcela, :dataPagamento, :dataVenda)`,{
            replacements:{
                usuarioID: args.body.usuarioID,
                nome: args.body.nome,
                rua: args.body.rua,
                numero: args.body.numero,
                bairro: args.body.bairro,
                item: args.body.item,
                valorTotal: args.body.valorTotal,
                valorRestante: args.body.valorRestante,
                valorParcela: args.body.valorParcela,
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

module.exports.updateVenda = (args) => {

    return args.sequelize.query(
        `UPDATE Venda
        SET Item = :item,
            ValorTotal = :valorTotal,
            ValorRestante = :valorRestante,
            ValorParcela = :valorParcela,
            DataVenda = :dataVenda,
            DataPagamento = :dataPagamento
        WHERE VendaID = :vendaID`,{
            replacements:{
                item: args.body.item,
                valorTotal: args.body.valorTotal,
                valorRestante: args.body.valorRestante,
                valorParcela: args.body.valorParcela,
                dataVenda: args.body.dataVenda,
                dataPagamento: args.body.dataPagamento,
                vendaID: args.body.vendaID
            }
        }
    ).catch(erro => {
        throw new Error(erro);
    });
}

module.exports.getVendaMes = (args) => {

    return args.sequelize.query(
        `SELECT SUM(ValorTotal) AS 'valorVendaMensal'
        FROM venda 
        where DataVenda >= :dataVenda And
            UsuarioID = :usuarioID`,{
            type: args.sequelize.QueryTypes.SELECT,
            replacements:{
                dataVenda: args.body.dataVenda,
                usuarioID: args.body.usuarioID
            },
            plain: true
            
        }
    ).catch(erro => {
        throw new Error(erro);
    });
}


module.exports.getVendaHoje = (args) => {

    return args.sequelize.query(
        `SELECT SUM(ValorTotal) AS 'valorVendaDiaria'
        FROM venda 
        where DataVenda = :dataVenda And
            UsuarioID = :usuarioID`,{
            type: args.sequelize.QueryTypes.SELECT,
            replacements:{
                dataVenda: args.body.dataVenda,
                usuarioID: args.body.usuarioID
            },
            plain: true
            
        }
    ).catch(erro => {
        throw new Error(erro);
    });
}

module.exports.getVendaAll = (args) => {

    return args.sequelize.query(
        `SELECT * 
        FROM Cliente `, {
        type: args.sequelize.QueryTypes.SELECT
        
    }).catch(erro => {
        throw new Error(erro);
    });
}