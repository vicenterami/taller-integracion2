const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.get("/User/:rut", async (req, res) => {
  try {
    const rut = req.params.rut;
    const user = await User.findOne({ rut });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
});

router.get("/userData/:rutt", async (req, res) => {
  try {
    const rut = req.params.rutt;
    const userData = await UserData.findOne({ rut });

    if (userData) {
      res.status(200).json({ userData });
    } else {
      res
        .status(404)
        .json({ message: "Error al obtener los datos de usuario" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "" });
  }
});

module.exports = router;
