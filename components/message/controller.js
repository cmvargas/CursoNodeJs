const store = require('./store.js');
function addMessage(chat,user, message, file){
  return new Promise((resolve, reject)=>{
    if(!chat || !user || !message){
      console.error('[messageController]: No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    let fileUrl = '';
    if(file){
      fileUrl = 'http://localhost:3000/app/files/'+file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    }
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
      resolve(store.list(filterUser));
    });
}
async function updateMessage(id, message){
  return new Promise(async (resolve, reject)=>{
    if(!id || !message){
      reject('Invalid data');
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id){
  return new Promise ((resolve, reject)=>{
    if(!id){
      reject('Id invalido');
      return false;
    }
    store.remove(id)
      .then(()=>{
        resolve();
      })
      .catch(e=>{
        reject(e);
      })
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}
