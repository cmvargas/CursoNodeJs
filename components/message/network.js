const express= require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.get('/',(req,res)=>{
  controller.getMessages()
  .then((messageList)=>{
    response.success(req, res, messageList, 200);
  })
  .catch(e => {
    response.error(req, res, "Unexpected Error", 500, e)
  })
});
router.post('/',(req,res)=>{
  controller.addMessage(req.body.user,req.body.message)
  .then((fullMessage)=>{
    response.success(req, res, fullMessage,201);
  }).catch((e)=>{
    response.error(req, res, 'Informacion invalida',400, 'Error en el controlador');
  });
  //res.status(201).send({error: '',body: 'Creado correctamente'});

});
router.delete('/',(req,res)=>{
  console.log(req.query);
  console.log(req.body);
  res.status(201).send();
});

module.exports = router;
