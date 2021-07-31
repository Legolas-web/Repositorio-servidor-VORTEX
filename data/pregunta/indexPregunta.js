'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const listarPreguntas = async () => {
     try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pregunta');
        const list = await pool.request().query(sqlQueries.listar);
        return list.recordset;
    } catch (error) { 
        return error.message;
     }
}

const crearPregunta = async (preguntaData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pregunta');
        const insertRespuesta = await pool.request()
                            .input('preguntaText', sql.NVarChar(255), preguntaData.preguntaText)
                            .query(sqlQueries.crear);                            
        return insertRespuesta.recordset;
    } catch (error) {
        return error.message;
    }
}

const listarId = async(idPregunta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pregunta');
        const user = await pool.request()
                            .input('idPregunta', sql.Int, idPregunta)
                            .query(sqlQueries.listarId);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const actualizaPregunta = async (idPregunta, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pregunta');
        const update = await pool.request()
                        .input('idPregunta', sql.Int, idPregunta)
                        .input('preguntaText', sql.NVarChar(255), data.preguntaText)
                        .query(sqlQueries.actualizar);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const eliminarPregunta = async (idPregunta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pregunta');
        const deleteRespuesta = await pool.request()
                            .input('idPregunta', sql.Int, idPregunta)
                            .query(sqlQueries.eliminar);
        return deleteRespuesta.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    listarPreguntas,
    crearPregunta,
    listarId,
    actualizaPregunta,
    eliminarPregunta
}