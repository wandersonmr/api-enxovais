'use strict'

module.exports.insertCliente = (args) => {

    return args.sequelize.query(
        `INSERT INTO Cliente (Nome, CPF, Rua, Numero, Bairro, Cidade, Telefone, Celular)
        values(:nome, :cpf, :rua, :numero, :bairro, :cidade, :telefone, :celular)`, {
        replacements: {
            nome: args.body.nome,
            cpf: args.body.cpf,
            rua: args.body.rua,
            numero: args.body.numero,
            bairro: args.body.bairro,
            cidade: args.body.cidade,
            telefone: args.body.telefone,
            celular: args.body.celular
        },

    }
    ).catch(erro => {
        throw new Error(erro);
    });
}

module.exports.getClienteByCpf = (args) => {


    return args.sequelize.query(
        `SELECT * 
        FROM Cliente 
        WHERE CPF = :cpf `, {
        type: args.sequelize.QueryTypes.SELECT,
        replacements: {
            cpf: args.cpf,
        },
        plain: true

    }).catch(erro => {
        throw new Error(erro);
    });
}

module.exports.updateCliente = (args) => {

    return args.sequelize.query(
        `UPDATE Cliente
        SET 
            Nome = :nome,
            CPF = :cpf,
            Rua = :rua,
            Numero = :numero,
            Bairro = :bairro,
            Cidade = :cidade,
            Telefone = :telefone,
            Celular = :celular
        WHERE ClienteID = :clienteID`,{
            replacements: {
                nome: args.body.nome,
                cpf: args.body.cpf,
                rua: args.body.rua,
                numero: args.body.numero,
                bairro: args.body.bairro,
                cidade: args.body.cidade,
                telefone: args.body.telefone,
                celular: args.body.celular,
                clienteID: args.body.clienteID
            }
        }
    ).catch(erro => {
        throw new Error(erro);
    });
}