const express= require('express');
const response = require('../../network/response.js');
const router = express.Router();

router.get('/',(req,res)=>{
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  });
  response.success(req, res, 'Lista de mensajes',201);
});
router.post('/',(req,res)=>{
  console.log(req.query.error=="ok");
  if(req.query.error == "ok"){
    response.error(req, res, 'Error inesperado',500, 'Es solo una simulacion de los errores');
  }else{
    response.success(req, res, 'Creado correctamente',201);
  }
  //res.status(201).send({error: '',body: 'Creado correctamente'});

});
router.delete('/',(req,res)=>{
  console.log(req.query);
  console.log(req.body);
  res.status(201).send();
});

module.exports = router;
