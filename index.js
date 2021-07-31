'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

const eventPreguntas = require('./routes/routerPregunta');
const eventRespuestas = require('./routes/routerRespuesta');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventPreguntas.routes);
app.use('/api', eventRespuestas.routes);

app.listen(config.port, () => console.log('http://localhost:' + config.port + '/api/preguntas'));