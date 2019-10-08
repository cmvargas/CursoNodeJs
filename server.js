const express = require('express');
const bodyParser = require('body-parser');
//const router = require('./components/message/network.js');
var router = require('./network/routes');
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
