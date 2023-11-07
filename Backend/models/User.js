const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  rut: String,
  correo: String,
  telefono: String,
  contrasena: String,
  rol: {
    type: String,
    default: 'usuario' 
  },
});

module.exports = mongoose.model('Usuario', userSchema);
