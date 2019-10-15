const db = require('mongoose');
db.Promise = global.Promise;
//'mongodb+srv://db_user_node:C12345678@cluster0-t4ciy.mongodb.net/node_db?retryWrites=true&w=majority'
async function connect(url){
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('[db] conectada con exito');
}

module.exports = connect
