const Sequelize = require('sequelize');
const fs = require('fs');
module.exports = new Sequelize(
    'news','igmer','12345',{
        host: 'localhost',
        dialect: 'mysql',

    }
);