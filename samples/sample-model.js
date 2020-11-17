const db = require('../data/config');

function getSample(){
    return db('sample').select('*');
}

module.exports = {
    getSample
}