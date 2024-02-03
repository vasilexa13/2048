const Sequelize = require('sequelize');
const db = require('./db');
const Users = db.users;

module.exports =
    async function wrightTokenToBase(idIn, tokenIn) {
        try {
            let result = await Users.update({
                token: tokenIn
            }, {
                where: {
                    id: idIn
                }
            })
            // console.log('tokenIn', tokenIn);
            return tokenIn
        }
        catch (err) {
            console.log('ERROR: ', err);
            throw err;
        }
    }

