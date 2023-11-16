const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");

router.post("/saveUserData", async (req, res) => {
  try {
    const { rut, weight, age, height, gender } = req.body;

    const existingUserData = await UserData.findOne({ rut });

    if (existingUserData) {
      existingUserData.weight = weight;
      existingUserData.age = age;
      existingUserData.height = height;
      existingUserData.gender = gender;
      await existingUserData.save();
      res
        .status(200)
        .json({ message: "Datos del usuario actualizados con éxito" });
    } else {
      const userData = new UserData({ rut, weight, age, height, gender });
      await userData.save();
      res
        .status(201)
        .json({ message: "Datos del usuario guardados con éxito" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al guardar o actualizar los datos del usuario" });
  }
});

module.exports = router;
