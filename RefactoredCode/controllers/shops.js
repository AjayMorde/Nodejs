const path = require('path');
const Product=require('../models/product')

const rootDir = require('../util/path');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };
  