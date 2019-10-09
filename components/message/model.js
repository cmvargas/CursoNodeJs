const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date,
});
const model = mongoose.model('mensajes', mySchema)
module.exports = model;