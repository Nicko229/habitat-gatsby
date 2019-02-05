const express = require("express");
const router = express.Router();
const { Router } = require('express');
// import { Router } from 'express';

// const sgMail = require('@sendgrid/mail');
const emailController = require('./controller')
const api = require('./app')

// import emailController from './controller'

router.post('/', emailController)

router.route('/')
  .get((req, res) => {
    res.send({ message: 'hi there' })
  })

module.exports = router;