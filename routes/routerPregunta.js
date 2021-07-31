'use strict';

const express = require('express');
const eventController = require('../controllers/controllerPregunta');
const router = express.Router();

router.get('/preguntas', eventController.listarPreguntas);
router.get('/pregunta/:id', eventController.listarId);
router.post('/add_pregunta', eventController.crearPregunta);
router.put('/put_pregunta/:id', eventController.actualizaPregunta);
router.delete('/del_pregunta/:id', eventController.eliminarPregunta);

module.exports = {

    routes: router

}