const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize("2048base", "root", "123qwe", {
    dialect: "mysql",
    host: "localhost",
    logging: false
});
const Users = require('./Users')(sequelize);

module.exports = {
    sequelize: sequelize,
    users: Users
}