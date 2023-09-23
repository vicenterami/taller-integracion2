import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setFono] = useState("");
  const [contrasena, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const parametros = {
      'nombre': nombre,
      'rut': rut,
      'correo': correo,
      'telefono': telefono,
      'contrasena': contrasena
    }
    try {
      const response = await fetch("http://192.168.1.12:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parametros),
      });
      if (response.status === 201) {
        const data = await response.json(); // Parsea la respuesta JSON
        const rutUsuario = data.rut;
        //navigate("/home", { state: { rut: rutUsuario } });
        console.log(data);
        alert("Usuario registrado exitosamente");

      } else if (response.status === 500) {
        const err = await response.json();
        console.log(err)
        if (err.error.code === 11000) {
          alert('el rut ya esta registrado')
        }
      } else {
        alert('ocurrio un error')
      }
    } catch (error) {
      console.error("Error al registrar usuariooo:", error);
      
    }
  };
  return (
    <div>        
      <div>
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
        <div>
          <label> Nombre y apellido</label>
          <input 
          type="text" 
          placeholder="Ej: Juan Perez"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Rut</label>
          <input 
          type="rut" 
          placeholder="1.111.111-1"
          id="rut"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Correo electrónico</label>
          <input 
          type="email" 
          placeholder="nombre@ejemplo.com"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Telefono</label>
          <input 
          type="" 
          placeholder="9-12345678"
          id="telefono"
          value={telefono}
          onChange={(e) => setFono(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Contraseña</label>
          <input 
          type="" 
          placeholder=""
          id="contrasena"
          value={contrasena}
          onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Confirmar contraseña</label>
          <input 
          type="" 
          placeholder=""
          
          ></input>
        </div>
        <button type="submit"> Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;