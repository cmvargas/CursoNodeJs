const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);

// app.use('/', (req,res)=>{
//   res.send('Hola');
// });
router.get('/message',(req,res)=>{
  res.send('Lista de mensajes');
});
router.post('/message',(req,res)=>{
  res.send('Mensaje añadido');
});
router.delete('/message',(req,res)=>{
  console.log(req.query);
  console.log(req.body);
  res.send('Mensaje '+req.body.text+'eliminado ya');
});
app.listen(3000,()=>{
  console.log('Escuchando en el puerto 3000');
});
