'use strict';

const express = require('express');
const eventController = require('../controllers/controllerRespuesta');
const router = express.Router();

router.get('/respuestas', eventController.listarRespuestas);
router.get('/respuesta/:id', eventController.listarId);
router.post('/add_respuesta', eventController.crearRespuesta);
router.put('/put_respuesta/:id', eventController.actualizaRespuesta);
router.delete('/del_respuesta/:id', eventController.eliminarRespuesta);


module.exports = {

    routes: router

}