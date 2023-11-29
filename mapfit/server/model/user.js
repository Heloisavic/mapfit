const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs');


const SALT_ROUNDS = 10; // Número de rounds de hashing

let userSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  login: {
    type: String
  },
  email: {
    type: String
  },
  idade: {
    type: Date
  },
  senha: {
    type: String
  },
  telefone:{
    type: Number  
  },
  genero:{
    type: String
  }
}, {
  collection: 'user'
});

userSchema.plugin(AutoIncrement, {
  inc_field: 'id'
});



module.exports = mongoose.model('user', userSchema);
