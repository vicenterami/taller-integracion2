import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import logo from "../../Images/logo.png";
import * as yup from 'yup';
import { Validations } from '../../ValidaciónDatos/DataValidation';
import ArrowComponent from "./BackArrow";
import { Toaster, toast } from 'sonner'


function Creardoc() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setFono] = useState("");
  const [contrasena, setPassword] = useState("");

  const formStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
    backgroundColor: "#0C6EFD",
  };

  const handleCreardoc = async (event) => {
    event.preventDefault();
    const parametros = {
      'nombre': nombre,
      'rut': rut,
      'correo': correo,
      'telefono': telefono,
      'contrasena': contrasena,
      'rol': 'doctor'
    };

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
      //const data = await response.json();

      if (response.status === 201) {
        toast.success("Doctor registrado exitosamente");
        setNombre("");
        setRut("");
        setCorreo("");
        setFono("");
        setPassword("");
        // Redirige a la página de inicio de sesión u otra página según tus necesidades.
      } else if (response.status === 401) {
        toast.error('El RUT ya está registrado');
      } else {
        toast.error('Ocurrió un error');
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        toast.error(error.message);
      } else {
        console.error("Error al registrar usuario:", error);
        toast.error('¡Algo ha fallado a la hora de registrar al doctor!')
      }
    }
  };
  return (
    <div>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div style={formStyle}> 
          <div className="row">
          <div> <ArrowComponent to={"/"}/></div> 
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            
              <div>
                <img src={logo} className="img-thumbnail" alt="Logo Cefan" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <h2 className="display-4">Crear Doctor</h2>
              <form onSubmit={handleCreardoc}>
                <div className="mb-2">
                  <label htmlFor="nombre" className="form-label fs-4">
                    Nombre y apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ej: Juan Perez Soto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="mb-2"> 
                  <label htmlFor="rut" className="form-label fs-4">
                    Rut
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rut"
                    placeholder="1.111.111-1"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                  />
                </div>
                <div className="mb-2"> 
                  <label htmlFor="correo" className="form-label fs-4">
                    Correo electrónico
                  </label>
                  <Toaster richColors position="top-center" toastOptions={{style: { width:'100%' , height:'auto' },    }}/> 
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="nombre@ejemplo.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
                <div className="mb-2"> 
                  <label htmlFor="telefono" className="form-label fs-4">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    placeholder="9-12345678"
                    value={telefono}
                    onChange={(e) => setFono(e.target.value)}
                  />
                </div>
                <div className="mb-2"> 
                  <label htmlFor="contrasena" className="form-label fs-4">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    placeholder="Contraseña..."
                    value={contrasena}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-info btn-lg fs-5">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Creardoc;
