const express = require('express');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(compression())
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;