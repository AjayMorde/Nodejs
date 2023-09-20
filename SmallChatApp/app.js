const express =require('express');

const app =express();

const data = require('./data');
const BP=require('body-parser');

const LR=require('./routes/login');

const MR=require('./routes/message');



app.use(BP.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.locals.data = data;
    next();
  });

app.use(LR);
app.use(MR);


console.log(data)
app.listen(3000);

