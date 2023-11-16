const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.get("/evoluciones/:rutt", async (req, res) => {
  try {
    const rutPaciente = req.params.rutt;

    const evolucionesDelPaciente = await Evolucion.find({
      pacienteRut: rutPaciente,
    });

    if (evolucionesDelPaciente.length === 0) {
      res.status(200).json({
        message:
          "No se encontraron evoluciones médicas asociadas a este paciente",
      });
    } else {
      res.status(200).json({ evoluciones: evolucionesDelPaciente });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener evoluciones médicas asociadas al paciente",
    });
  }
});

module.exports = router;
