const Model = require('./model');

function addUser(user){
  const myUser = new Model(user);
  return myUser.save();
}

async function getUsers(filterUser){
  let filter = {};
  if(filterUser != null){
    filter = {name: filterUser};
  }
  const message = await Model.find(filter);
  return message;
}

module.exports = {
  add: addUser,
  list: getUsers
}
