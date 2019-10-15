const Model = require('./model.js')
//mongodb+srv://db_user_node:C12345678..@cluster0-t4ciy.mongodb.net/test?retryWrites=true&w=majority
function addMessage(message){
  //list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}
async function getMessages(filterUser){
  // return list;
  return new Promise((resolve, reject)=>{
    let filter = {};
    if(filterUser != null){
      filter = {user: filterUser};
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated)=>{
        if(error){
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });

}

function removeMessage(id){
  return Model.deleteOne({
    _id:id
  });
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
  updateText: updateText,
  remove:removeMessage
}
