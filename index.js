// criando uma constante 'express' e vinculando á biblioteca 'express'
const express = require('express');
//criando uma constante para o 'mongoose'
const mongoose = require('mongoose');
// criando um novo objeto da classe express
var app = express();

//estabelecendo a conexão com o MongoDb
mongoose.connect('mongodb+srv://heroldi:mysql@cluster0.dyojw.mongodb.net/deliverydb');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());
app.use('/api',require('./routes/api'));
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message })
});


// definindo a porta onde a 'api' irá escutar
app.listen(process.env.port || 4000, function(){
    console.log('API iniciada! Aceitando requisições!');
})