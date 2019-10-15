const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    chat:{
      type:Schema.ObjectId,
      ref: 'chat'
    },
    user: {
      type:Schema.ObjectId,
      ref:'users'
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String
});
const model = mongoose.model('mensajes', mySchema)
module.exports = model;
