module.exports = function hashRes(pass = '') {
    const { createHmac } = require('node:crypto');
    const hash = createHmac('sha256', pass)
        .update('I love cupcakes')
        .digest('hex');
    // console.log(hash);
    return hash;
}

