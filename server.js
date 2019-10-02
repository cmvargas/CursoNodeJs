const express = require('express');
const router = express.Router();
var app = express();
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
app.listen(3000,()=>{
  console.log('Escuchando en el puerto 3000');
});
