const Sequelize = require('sequelize');
const db = require('./db');
const Users = db.users;

module.exports =
    async function findFromBase(mailIn, passIn) {
        try {
            let result = await Users.findOne({
                where: {
                    mail: mailIn,
                    pass: passIn
                }
            });
            return result
        }
        catch (err) {
            console.log('ERROR: ', err);
            throw err;
        }
    }


