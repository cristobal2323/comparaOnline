'use strict'
const Product = require('../models/product.js')
const CarInsurance = require('../models/carInsurance.js')

function getCarInsurance (req, res) {
	
console.log(req.body.name)		
  const producto = new CarInsurance([ new Product(req.body.name, req.body.sellIn, req.body.price)]);
  const products = producto.listPrice();
  res.status(200).send({ products })
}

module.exports = {
  getCarInsurance,
}
