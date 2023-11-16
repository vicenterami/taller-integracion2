const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.post("/subirHora", async (req, res) => {
  try {
    const {
      doctorRut,
      especialidad,
      fecha,
      disponible,
      reservada,
      pacienteRut,
    } = req.body;

    const doctor = await User.findOne({ rut: doctorRut });

    if (!doctor) {
      return res
        .status(400)
        .json({ message: "El doctor con el RUT proporcionado no existe" });
    }

    const cita = new Cita({
      doctor: doctor.nombre,
      especialidad,
      fecha,
      disponible,
      reservada,
      pacienteRut,
      doctorRut,
    });

    await cita.save();

    res.status(201).json({ message: "Cita registrada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar cita" });
  }
});

module.exports = router;
