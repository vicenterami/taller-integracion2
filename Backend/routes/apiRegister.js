const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { nombre, rut, correo, telefono, contrasena, rol } = req.body;
    const user = new User({ nombre, rut, correo, telefono, contrasena, rol });
    await user.save();

    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
});

module.exports = router;
