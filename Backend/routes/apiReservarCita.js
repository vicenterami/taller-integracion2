const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.post("/citas/reservar", async (req, res) => {
  try {
    const { citaId, pacienteId } = req.body;
    console.log(pacienteId);
    console.log(citaId);
    const cita = await Cita.findById(citaId);

    if (!cita || !cita.disponible) {
      res
        .status(400)
        .json({ message: "La cita no está disponible para reserva" });
      return;
    }

    cita.reservada = true;
    cita.pacienteRut = pacienteId;
    cita.disponible = false;
    await cita.save();

    res.status(200).json({ message: "Cita reservada con éxito" });
  } catch (error) {
    console.error("Error al reservar la cita:", error);
    res.status(500).json({ message: "Error interno al reservar la cita" });
  }
});

module.exports = router;
