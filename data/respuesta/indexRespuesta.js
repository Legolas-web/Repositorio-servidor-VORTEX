'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const listarRespuestas = async () => {
     try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const list = await pool.request().query(sqlQueries.listar);
        return list.recordset;
    } catch (error) { 
        return error.message;
     }
}

const crearRespuesta = async (respuestaData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const insertRespuesta = await pool.request()
                            .input('respuestaText', sql.NVarChar(255), respuestaData.respuestaText)
                            .input('idPregunta', sql.Int, respuestaData.idPregunta)
                            .query(sqlQueries.crear);                            
        return insertRespuesta.recordset;
    } catch (error) {
        return error.message;
    }
}

const listarId = async(idPregunta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const user = await pool.request()
                            .input('idPregunta', sql.Int, idPregunta)
                            .query(sqlQueries.listarId);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const actualizaRespuesta = async (idRespuesta, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const update = await pool.request()
                        .input('idRespuesta', sql.Int, idRespuesta)
                        .input('respuestaText', sql.NVarChar(255), data.respuestaText)
                        .input('idPregunta', sql.Int, data.idPregunta)
                        .query(sqlQueries.actualizar);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const eliminarRespuesta = async (idRespuesta) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('respuesta');
        const deleteRespuesta = await pool.request()
                            .input('idRespuesta', sql.Int, idRespuesta)
                            .query(sqlQueries.eliminar);
        return deleteRespuesta.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    listarRespuestas,
    crearRespuesta,
    listarId,
    actualizaRespuesta,
    eliminarRespuesta
}