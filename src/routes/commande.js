var MongoClient = require('mongodb').MongoClient;
const express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('YAY you reach the commande service API !');
});


app.get('/all', (req, res) => {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017";
  console.log("IN GET COMMANDES");

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('gesspoirPOC');
    dbo.collection("commande").find({}, { projection: { _id: 0, nom: 1, type: 1, typeDoc: 1, dateFin: 1, typePrestation: 1 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.type('application/json')
        .status(201)
        .send({results: result});
      db.close();
    });
  });
});

//----------------------------------------------------------------------------------------------------



app.get('/recherche/:searchTherm', (req, res) => {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017";
  console.log("IN GET COMMANDES");

  MongoClient.connect(url, function(err, db) {
    const no = req.params.searchTherm ;
    if (err) throw err;
    var dbo = db.db('gesspoirPOC');
    dbo.collection("commande").find({$or: [{"nom":{$regex : ".*"+no+".*"}}]}, { projection: { _id: 0, nom: 1, type: 1, typeDoc: 1, dateFin: 1, typePrestation: 1 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log("query result"+result);
      res.type('application/json')
        .status(201)
        .send({results: result});
      db.close();
    });
  });
});


//----------------------------------------------------------------------------------------------------


app.post('/create', (req, res) => {
  let commande = req.body;
  var url = "mongodb://localhost:27017";
  console.log("IN CREATE");
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("in database");
    var dbo = db.db('gesspoirPOC');
    dbo.collection("commande").insertOne(commande, function(err, res){
      if(err) throw err ;
      console.log("Une commande a été insérée");
      db.close();
    });
  });

});



module.exports = app;





//----------------------------------------------------------------------------------------------------
