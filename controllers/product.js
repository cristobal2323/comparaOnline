'use strict'

const Product = require('../models/product')
const CarInsurance = require('../models/carInsurance.js')

function getProducts (req, res) {
  const producto = new CarInsurance();
  const products = producto.listPrice();
  res.status(200).send({ products })
}

module.exports = {
  getProducts,
}
