const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const { rut, contrasena } = req.body;
    const user = await User.findOne({ rut, contrasena });

    if (user) {
      const isAdmin = user.rol === "administrador";
      const isDoctor = user.rol === "doctor";

      // Genera un token JWT
      const token = jwt.sign(
        { userId: user._id, isAdmin, isDoctor },
        "tu_secreto_secreto",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Inicio de sesión exitoso",
        rut: user.rut,
        nombre: user.nombre,
        isAdmin,
        isDoctor,
        token,
      });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el inicio de sesión" });
  }
});

module.exports = router;
