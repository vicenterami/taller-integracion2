const mongoose = require('mongoose');

const evolucionSchema = new mongoose.Schema({
  doctor: String,        
  fecha: Date,          
  especialidad: String,
  notas: String,  
  medicamentos: String,  
  pacienteRut: String, 
});

module.exports = mongoose.model('Evolucion', evolucionSchema);