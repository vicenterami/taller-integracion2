const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const Cita = require("../models/cita");
const Evolucion = require("../models/evolucion");
const jwt = require("jsonwebtoken");


router.post('/register', async (req, res) => {
  try {
    const { nombre, rut, correo, telefono, contrasena, rol } = req.body;
    const user = new User({ nombre, rut, correo, telefono, contrasena, rol });
    await user.save();

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

router.post('/subirEvolucion', async (req, res) => {
  try {
    const { doctor, especialidad, fecha, notas, medicamentos ,pacienteRut } = req.body;
  
    const evolucion = new Evolucion({
      doctor,
      especialidad,
      fecha,
      notas,
      medicamentos,
      pacienteRut,
    });

    await evolucion.save();

    res.status(201).json({ message: 'Cita registrada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar cita' });
  }
});

router.post('/subirHora', async (req, res) => {
  try {
    const { doctorRut, especialidad, fecha, disponible, reservada, pacienteRut } = req.body;

    const doctor = await User.findOne({ rut: doctorRut });
    if (!doctor) {
      return res.status(400).json({ message: 'El doctor con el RUT proporcionado no existe' });
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

    res.status(201).json({ message: 'Cita registrada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar cita' });
  }
});



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



router.get('/User/:rut', async (req, res) => {
  try {
    const rut = req.params.rut;
    const user = await User.findOne({ rut });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
});

router.post('/saveUserData', async (req, res) => {
  try {
    const { rut, weight, age, height, gender } = req.body;

    const existingUserData = await UserData.findOne({ rut });

    if (existingUserData) {
      existingUserData.weight = weight;
      existingUserData.age = age;
      existingUserData.height = height;
      existingUserData.gender = gender;
      await existingUserData.save();
      res.status(200).json({ message: 'Datos del usuario actualizados con éxito' });
    } else {
      const userData = new UserData({ rut, weight, age, height, gender });
      await userData.save();
      res.status(201).json({ message: 'Datos del usuario guardados con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar o actualizar los datos del usuario' });
  }
});


router.get('/citas/disponibles', async (req, res) => {
  try {
    const citasDisponibles = await Cita.find({ disponible: true });
    res.status(200).json({ citas: citasDisponibles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener citas disponibles' });
  }
});


router.post('/citas/reservar', async (req, res) => {
  try {
    const { citaId, pacienteId } = req.body;
    console.log(pacienteId)
    console.log(citaId)
    const cita = await Cita.findById(citaId);
    
    if (!cita || !cita.disponible) {
      res.status(400).json({ message: 'La cita no está disponible para reserva' });
      return;
    }
   

    cita.reservada = true;
    cita.pacienteRut = pacienteId;
    cita.disponible = false;
    await cita.save();

    res.status(200).json({ message: 'Cita reservada con éxito' });
  } catch (error) {
    console.error('Error al reservar la cita:', error);
    res.status(500).json({ message: 'Error interno al reservar la cita' });
  }
});

router.get('/citas/disponibles/:rutt', async (req, res) => {
  try {
    const rutPaciente = req.params.rutt;

    const citasDelPaciente = await Cita.find({ pacienteRut: rutPaciente });

    if (citasDelPaciente.length === 0) {
      res.status(200).json({ message: 'No se encontraron citas asociadas a este paciente' });
    } else {
      res.status(200).json({ citas: citasDelPaciente });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener citas asociadas al paciente' });
  }
});

router.get('/evoluciones/:rutt', async (req, res) => {
  try {
    const rutPaciente = req.params.rutt;

    const evolucionesDelPaciente = await Evolucion.find({ pacienteRut: rutPaciente });

    if (evolucionesDelPaciente.length === 0) {
      res.status(200).json({ message: 'No se encontraron evoluciones médicas asociadas a este paciente' });
    } else {
      res.status(200).json({ evoluciones: evolucionesDelPaciente });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener evoluciones médicas asociadas al paciente' });
  }
});

router.get('/userData/:rutt', async (req, res) => {
  try {
    const rut = req.params.rutt; 
    const userData = await UserData.findOne({ rut });

    if (userData) {
      res.status(200).json({ userData });
    } else {
      res.status(404).json({ message: 'Error al obtener los datos de usuario' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '' });
  }
});

router.get('/usuarios/doctores', async (req, res) => {
  try {
    const doctores = await User.find({ rol: 'doctor' });
    res.status(200).json({ doctores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la lista de doctores' });
  }
});


module.exports = router;
