require('dotenv').config()
const express = require('express')
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes');
const { Router } = require('express');
const cors = require('cors');
// const { Form } = require('../src/App)

// import routes from './routes'
// import { Router } from 'express';
// import { Form } from '../src/App'
app.use(bodyParser.json());
app.use(cors());
const api = Router();

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(5000, function () {
  console.log('hello i work')
});

module.exports = app;