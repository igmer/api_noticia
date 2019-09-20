const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Noticia = require('../models/NoticiaModel');



router.get('/get_noticia', (req, res) =>
    Noticia.findAll()
        .then(noticia => {
            console.log(noticia);
            res.json({
                status: 200,
                data: noticia
            })
        })
        .catch(err => console.log(err))
);
    router.get('/', (req, res) => {
        var categoria= req.param("section");
        if (categoria===undefined){
            categoria ='nacionales';
        }

            Noticia.findAll({
                where: {
                    categoria: categoria
                }
            })
                .then(noticia => {
                    console.log(noticia);
                    res.json({
                        status: 200,
                        response: {
                            status: 'ok',
                            results: noticia

                        }
                    })
                })
                .catch(err => console.log(err))

        }
    );

module.exports = router;

