

const express = require('express');

const { productsController } =require('../controllers/products')

const { pc }   =require('../controllers/products')

const router = express.Router();

router.get('/add-product',productsController);


router.post('/add-product', pc);

module.exports = router;
