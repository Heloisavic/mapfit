const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const SALT_ROUNDS = 10; // Número de rounds de hashing

let personalSchema = new Schema({
  name: {
    type: String
  },
  login: {
    type: String
  },
  email: {
    type: String
  },
  dataNascimento: {
    type: Date
  },
  senha: {
    type: String
  },
  atuacao: {
    type: String
  },
  crm:{
    type: String
  },
  telefone:{
    type: Number
  },
  Genero:{
    type: String
  },
  img:{
    type: String
  }
}, {
  collection: 'personal'
});




module.exports = mongoose.model('personal', personalSchema);
