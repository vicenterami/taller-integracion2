import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import * as yup from 'yup'
import { Validations } from '../ValidaciónDatos/DataValidation';
import ArrowComponent from "./utilidades/BackArrow";

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
      await Validations.validate({
        nombre,
        rut,
        correo,
        telefono,
        contrasena,
      });
      const response = await fetch("http://45.236.129.38:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parametros),
      });
      const data = await response.json();

      if (response.status === 201) {
        alert("Usuario registrado exitosamente");
        navigate("/IniciarSesion");
      }  else if({ state: { rut: data.rut } }){
          alert('el RUT ya esta registrado')
      } else {
        alert('ocurrio un error')
      }
    } catch (error) {
      if(error instanceof yup.ValidationError) {
        alert(error.message);
      } else {
        console.error("Error al registrar usuario:", error);
      }
    }
  };
  return (
    
    <div className="container" style={{ backgroundColor:'#b2d8d8', padding:'20px', borderRadius: '15px'}}> 
    <div> <ArrowComponent to={"/"}/></div>       
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div style={{ backgroundColor: '#ADD8E6', padding: '20px', borderRadius: '15px' }}>
            <div className="text-center mb-5" style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
              <img src={logo} alt="Logo"  style={{width: '150px', marginBottom: '20px'}} />
              <h2 >Registro</h2>
            </div>
            <form onSubmit={handleRegister} className="mb-4">
              <div className="form-group">
                <label> Nombre y apellidos</label>
                <input 
                type="text" 
                placeholder="Ej: Juan Perez Soto"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>Rut</label>
                <input 
                type="rut" 
                placeholder="1.111.111-1"
                id="rut"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>Correo electrónico</label>
                <input 
                type="email" 
                placeholder="nombre@ejemplo.com"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input 
                type="number" 
                placeholder="9-12345678"
                id="telefono"
                value={telefono}
                onChange={(e) => setFono(e.target.value)}
                className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input 
                type="password" 
                placeholder="Contraseña..."
                id="contrasena"
                value={contrasena}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                ></input>
              </div>
              {/* <div className="form-group">
                <label>Confirmar contraseña</label>
                <input 
                type="password" 
                placeholder="Confirmar contraseña..."
                className="form-control"
                ></input>
              </div> */}
              <button type="submit" className="btn btn-primary mt-3"> 
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;