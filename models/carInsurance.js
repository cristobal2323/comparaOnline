module.exports = class CarInsurance {
  constructor(products) {
    this.products = products;
  }
  updatePrice(product) {
    let obj = {};
    let suma = 0;
    obj.name = product.name
    switch(product.name) {
      case "Medium Coverage":
        if(product.sellIn > 0){
          obj.price = (product.price > 0) ? product.price - 1 : 0;
          obj.sellIn = product.sellIn - 1;
        }else{
          obj.price = (product.price > 0) ? product.price - 2 : 0;
          obj.sellIn = product.sellIn - 1;
        }
      break;
      case "Low Coverage":
        if(product.sellIn > 0){
          obj.price = (product.price > 0) ? product.price - 1 : 0;
          obj.sellIn = product.sellIn - 1;
        }else{
          obj.price = (product.price > 0) ? product.price - 2 : 0;
          obj.sellIn = product.sellIn - 1;
        }
      break;
      case "Full Coverage":
        if(product.sellIn > 0){
          suma = parseInt(product.price,10) + 1;
          obj.price = (product.price >= 0) ? (suma <= 50 )? suma : 50  : 0;
          obj.sellIn = product.sellIn - 1;
        }else{
          suma = parseInt(product.price,10) + 2;
          obj.price = (product.price >= 0) ? (suma <= 50 )? suma : 50  : 0;
          obj.sellIn = product.sellIn - 1 ;
        }
      break;
      case "Mega Coverage":
        obj.sellIn = product.sellIn - 1 ;
        obj.price = 80;
      break
      case "Special Full Coverage":
        if(product.sellIn > 10){
          suma = parseInt(product.price,10) + 1;
          obj.price = (product.price >= 0) ? (suma <= 50 )? suma : 50  : 0;
          obj.sellIn = product.sellIn - 1;
        }else if(product.sellIn > 5){
          suma = parseInt(product.price,10) + 2;
          obj.price = (product.price >= 0) ? (suma <= 50 )? suma : 50  : 0;
          obj.sellIn = product.sellIn - 1 ;
        }else if(product.sellIn > 0){
          suma = parseInt(product.price,10) + 3;
          obj.price = (product.price >= 0) ? (suma <= 50 )? suma : 50  : 0;
          obj.sellIn = product.sellIn - 1 ;
        }else{
          obj.price = 0;
          obj.sellIn = product.sellIn - 1 ;
        }
      break;
      case "Super Sale":
        if(product.sellIn > 0){
          obj.price = (product.price > 0) ? product.price - 2 : 0;
          obj.sellIn = product.sellIn - 1;
        }else{
          obj.price = (product.price > 0) ? product.price - 4 : 0;
          obj.sellIn = product.sellIn - 1;
        }
      break;
      

    }

    return obj;
  }

  listPrice() {
    let products = [];
    for (var i = 0; i < 30; i++) {
      let objUpdate = this.updatePrice(this.products[i])
      this.products.push(objUpdate)
    }
   
    return this.products;
  }
}


