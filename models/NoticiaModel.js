let Sequelize = require('sequelize');
const db = require('../config/database');

const Noticia = db.define('noticia',{
    id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true },
    encabezado:Sequelize.STRING,
    sumario:Sequelize.STRING,
    entrada:Sequelize.STRING,
    cuerpo:Sequelize.STRING,
    remate:Sequelize.STRING,
    fecha_hora_reg:Sequelize.STRING,
    categoria:Sequelize.STRING,
    periodista:Sequelize.STRING,
    url_video:Sequelize.STRING,
    imagen:Sequelize.STRING,


},{
    tableName: 'noticia',
    timestamps:false
});
module.exports = Noticia;