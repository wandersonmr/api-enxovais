'use strict';

require('dotenv-safe').load();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

const cors = require('cors')
app.use(cors())

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);

module.exports = app;