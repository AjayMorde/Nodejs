

const express = require('express');

const { sps }=require('../controllers/shops')

const router = express.Router();

router.get('/', sps );

module.exports = router;
