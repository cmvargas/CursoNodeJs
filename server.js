const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');
//const router = require('./components/message/network.js');
var router = require('./network/routes');
db('mongodb+srv://db_user_node:C12345678@cluster0-t4ciy.mongodb.net/node_db?retryWrites=true&w=majority');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
router(app);

// app.use('/', (req,res)=>{
//   res.send('Hola');
// });
app.use('/app', express.static('public'));
app.listen(3000,()=>{
  console.log('Escuchando en el puerto 3000');
});
