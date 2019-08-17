'use strict';

const Sequelize = require('sequelize'); 



module.exports.getConnection = (databaseServer, databaseUser, databasePass, databaseName) => {
  
    let host = databaseServer ? databaseServer.toString().split(':')[0] : process.env.DATABASE_SERVER;

    let port = databaseServer && databaseServer.toString().split(':')[1] ? databaseServer.toString().split(':')[1] : process.env.DATABASE_PORT;
    port = isNaN(parseInt(port)) ? null : parseInt(port);

    let user = databaseUser ? databaseUser : process.env.DATABASE_USER;
    let pass = databasePass ? databasePass : process.env.DATABASE_PASSWORD;
    let name = databaseName ? databaseName : process.env.DATABASE_NAME;

    // https://github.com/sequelize/sequelize/issues/7879#issuecomment-329971730
    // Override timezone formatting
    Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
        
        date = this._applyTimezone(date, options);

        // Z here means current timezone, not UTC
        // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
        return date.format('YYYY-MM-DD HH:mm:ss.SSS');
    };
    //...

    let sequelize = new Sequelize(name, user, pass, {

        host: host,
        port: port,
        dialect: 'mssql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false,
        dialectOptions: {
            useUTC: false //for reading from database
        },
        timezone: '-03:00' //for writing to database
    });

    return sequelize;
};

