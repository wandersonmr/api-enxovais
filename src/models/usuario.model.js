'use strict'

module.exports.insertUsuario = (args) => {

    return args.sequelize.query(
        `INSERT INTO Usuario (NomeUsuario, Nome, CPF, Senha, Cargo)
        values(:nomeUsuario, :nome, :cpf, :senha, :cargo)`,{
            replacements:{
                nome: args.body.nome,
                nomeUsuario: args.body.nomeUsuario,
                senha: args.body.senha,
                cargo: args.body.cargo,
                cpf: args.body.cpf
            },

        }
    ).catch(erro => {
        throw new Error(erro);
    });
}

module.exports.getLogin = (args) => {

    return args.sequelize.query(
        `SELECT * 
        FROM Usuario
        WHERE Senha = :senha AND
              NomeUsuario = :nomeUsuario
        `, {
            type: args.sequelize.QueryTypes.SELECT,
            replacements: {
                senha: args.body.senha,
                nomeUsuario: args.body.nomeUsuario
            },
            plain: true,
        }
    ).catch(erro => {
        throw new Error(erro);
    });
}