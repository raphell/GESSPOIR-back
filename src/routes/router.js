//import express from 'express';
const express = require('express')
const router = express();

//const sspRouter = require('./ssp');
//const contratRouter = require('./contrat');
//const devisRouter = require('./devis');
const commandeRouter = require('./commande');
//import authRouter from '.auth';
//import sspRouter from './ssp';
/*import contratRouter from './contrat';
import devisRouter from './devis';
import commandeRouter from './commande';*/


//router.use('/auth', authRouter);
//router.use('/ssp', sspRouter);
//router.use('/contrat', contratRouter);
//router.use('/devis', devisRouter);
router.use('/commande', commandeRouter);

module.exports = router ;
