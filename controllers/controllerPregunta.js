'use strict';

const eventData = require('../data/pregunta/indexPregunta');

const listarPreguntas = async (req, res, next) => {
    try {
        const events = await eventData.listarPreguntas();
        res.send(events);
    } catch (error) {  
        res.status(400).send(error.message);
    }
}

const crearPregunta = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.crearPregunta(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const listarId = async (req, res, next) => {
    try {
        const idPregunta = req.params.id;
        const pregunta = await eventData.listarId(idPregunta);
        res.send(pregunta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const actualizaPregunta = async (req, res, next) => {
    try {
        const idPregunta =  req.params.id;
        const data = req.body;
        const updated = await eventData.actualizaPregunta(idPregunta, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const eliminarPregunta = async (req, res, next) => {
    try {
        const idPregunta = req.params.id;
        const eliminaPre = await eventData.eliminarPregunta(idPregunta);
        res.send(eliminaPre);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    listarPreguntas,
    crearPregunta,
    listarId,
    actualizaPregunta,
    eliminarPregunta
}