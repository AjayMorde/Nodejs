const express = require('express');
const { contactus } = require('../controllers/contact'); 

const router = express.Router();

router.get('/contact', contactus);

module.exports = router;
