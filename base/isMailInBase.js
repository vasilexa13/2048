const Sequelize = require('sequelize');
const db = require('./db');
const Users = db.users;

module.exports =
    async function isMailInBase(mailIn) {
        try {
            let result = await Users.findOne({
                where: {
                    mail: mailIn
                }
            })
            // console.log('result', result);
            return result
        }
        catch (err) {
            console.log('ERROR: ', err);
            throw err;
        }
    }