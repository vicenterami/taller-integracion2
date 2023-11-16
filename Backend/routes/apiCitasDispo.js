const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.get("/citas/disponibles", async (req, res) => {
  try {
    const citasDisponibles = await Cita.find({ disponible: true });
    res.status(200).json({ citas: citasDisponibles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener citas disponibles" });
  }
});

router.get("/citas/disponibles/:rutt", async (req, res) => {
  try {
    const rutPaciente = req.params.rutt;

    const citasDelPaciente = await Cita.find({ pacienteRut: rutPaciente });

    if (citasDelPaciente.length === 0) {
      res
        .status(200)
        .json({ message: "No se encontraron citas asociadas a este paciente" });
    } else {
      res.status(200).json({ citas: citasDelPaciente });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener citas asociadas al paciente" });
  }
});

module.exports = router;
