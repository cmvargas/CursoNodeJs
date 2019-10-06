const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response.js');
const router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);

// app.use('/', (req,res)=>{
//   res.send('Hola');
// });
router.get('/message',(req,res)=>{
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  });
  response.success(req, res, 'Lista de mensajes',201);
});
router.post('/message',(req,res)=>{
  console.log(req.query.error=="ok");
  if(req.query.error == "ok"){
    response.error(req, res, 'Error inesperado',500, 'Es solo una simulacion de los errores');
  }else{
    response.success(req, res, 'Creado correctamente',201);
  }
  //res.status(201).send({error: '',body: 'Creado correctamente'});

});
router.delete('/message',(req,res)=>{
  console.log(req.query);
  console.log(req.body);
  res.status(201).send();
});
app.use('/app', express.static('public'));
app.listen(3000,()=>{
  console.log('Escuchando en el puerto 3000');
});
