'use strict'

module.exports.insertCliente = (args) => {

    return args.sequelize.query(
        `INSERT INTO Clientes (nomeCompleto, senha, cargo)
        values(:nomeCompleto, :senha, :cargo)`,{
            replacements:{
                nomeCompleto: args.body.nomeCompleto,
                senha: args.body.senha,
                cargo: args.body.cargo
            },

        }
    ).catch(erro => {
        throw new Error(erro);
    });
}