const Sequelize = require('sequelize');
const db = require('./db');
const Users = db.users;

module.exports =
    async function registerationToBase(mailIn, passIn, userIn) {
        try {
            let result = await Users.create({
                userName: userIn,
                mail: mailIn,
                pass: passIn
            })
            // console.log('result', result);
            return result
        }
        catch (err) {
            console.log('ERROR: ', err);
            throw err;
        }
    }