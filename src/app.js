//import express from 'express';
//import apiRouter from './routes/router'; //router
const express = require('express');
var cors = require('cors')
const apiRouter = require('./routes/router');


const app = express();
const port = 4000;

app.use(cors());


// routes
app.use('/', apiRouter);

app.get('/', (req, res) => {
  //logger.info('A request had been received on /');
  console.log("A request had been received on");
  res.send('Welcome to gesspoir');
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
