const express= require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.post('/', function(req,res){
controller.addUser(req.body.name)
.then(data => {
  response.success(req, res, data, 201);
})
.catch(err =>{
  response.error(req, res, 'Internal error', 500, err);
})
})


router.get('/',(req,res)=>{
  const filterUsers = req.query.name || null;
  controller.getUsers(filterUsers)
  .then((usersList)=>{
    response.success(req, res, usersList, 200);
  })
  .catch(e => {
    response.error(req, res, "Unexpected Error", 500, e)
  })
});
module.exports = router;
