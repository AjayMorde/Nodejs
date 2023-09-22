const Product=require('../models/product')
const path = require('path');

const rootDir = require('../util/path');

exports.productsController= (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

  exports.pc=(req, res, next) => {
    const product=new Product(req.body.title)
    product.save()
    res.redirect('/');
  }


