const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define("Users", {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNULL: false
        },
        userName: {
            type: Sequelize.STRING(100),
            allowNULL: false
        },
        mail: {
            type: Sequelize.STRING(100),
            //уникальный ключ unique: 'mail' uuid
            allowNULL: false
        },
        pass: {
            type: Sequelize.STRING(64),
            primaryKey: true,
            allowNULL: false
        },
        token: {
            type: Sequelize.STRING(64),
            allowNULL: false
        }
    }, {
        timestamps: false,
        tableName: 'users'
    });
}