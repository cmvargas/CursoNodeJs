const db = require('mongoose');
const Model = require('./model.js')
//mongodb+srv://db_user_node:C12345678..@cluster0-t4ciy.mongodb.net/test?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_node:C12345678@cluster0-t4ciy.mongodb.net/node_db?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
console.log('[db] conectada con exito');
function addMessage(message){
  //list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}
async function getMessages(filterUser){
  // return list;
  let filter = {};
  if(filterUser != null){
    filter = {user: filterUser};
  }
  const message = await Model.find(filter);
  return message;
}

async function updateText(id, message){
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message; 
  
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText
}
