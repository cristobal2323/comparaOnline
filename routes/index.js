'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const carInsuranceCtrl = require('../controllers/carInsurance')
const api = express.Router()

api.post('/carInsurance', carInsuranceCtrl.getCarInsurance)


module.exports = api
