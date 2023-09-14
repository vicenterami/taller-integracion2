const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  rut: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: String,
  contrasena: String,
});

module.exports = mongoose.model("Usuario", userSchema); // Asegúrate de que el nombre del modelo coincida con el de la colección en MongoDB
