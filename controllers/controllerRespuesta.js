'use strict';

const eventData = require('../data/respuesta/indexRespuesta');

const listarRespuestas = async (req, res, next) => {
    try {
        const events = await eventData.listarRespuestas();
        res.send(events);
    } catch (error) {  
        res.status(400).send(error.message);
    }
}

const crearRespuesta = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.crearRespuesta(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const listarId = async (req, res, next) => {
    try {
        const idPregunta = req.params.id;
        const respuesta = await eventData.listarId(idPregunta);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const actualizaRespuesta = async (req, res, next) => {
    try {
        const idRespuesta =  req.params.id;
        const data = req.body;
        const updated = await eventData.actualizaRespuesta(idRespuesta, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const eliminarRespuesta = async (req, res, next) => {
    try {
        const idRespuesta = req.params.id;
        const eliminaRes = await eventData.eliminarRespuesta(idRespuesta);
        res.send(eliminaRes);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    listarRespuestas,
    crearRespuesta,
    listarId,
    actualizaRespuesta,
    eliminarRespuesta
}