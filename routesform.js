// Initialize express router
let router = require('express').Router();
const express = require('express');
const multer = require('multer');
//const upload = multer({dest: __dirname + '/public/images'});
var path = require('path');
var ip = require("ip");
let id_address= ip.address();
var port = process.env.PORT || 8080;


const Noticia = require('./models/NoticiaModel');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});

var upload = multer({ storage: storage });


// Set default API response
router.get('/', function (req, res) {
    res.render('add_noticia.html');
});
router.post('/add_noticia', upload.single('imagen'), (req, res) => {
   let imagen ='http://'+id_address+':'+port+'/images/' + req.file.filename;
   console.log(imagen);
    let {
        id,
        encabezado,
        sumario,
        entrada,
        cuerpo,
        remate,
        fecha_noticia,
        fecha_hora_reg,
        categoria,
        periodista,
        url_video,

    } = req.body;
    Noticia.create({
        id,
        sumario,
        encabezado,
        entrada,
        cuerpo,
        remate,
        fecha_noticia,
        fecha_hora_reg,
        categoria,
        periodista,
        url_video,
        imagen
    })
        .then(customer => res.json({
            status: 200,
            data: "Exito al registrar"
        }))
        .catch(err => res.json({
            status: 406,
            data: err
        }))
});

module.exports = router;
