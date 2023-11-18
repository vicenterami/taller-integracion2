import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Toaster, toast } from "sonner";

function UsuarioDoctor() {
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(userData);
  const [doctor, setDoctor] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [pacienteRut, setPacienteRut] = useState("");
 
  const [notas, setNota] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [fechaHora, setFechaHora] = useState(new Date().toISOString());
  const handleDateChange = (selectedDate) => {
    setFechaHora(selectedDate.toISOString());
  };

  const formStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
    backgroundColor: "#0C6EFD",
  };

  const handleSubirHora = async (event) => {
    event.preventDefault();
    const parametros = {
      doctor: doctor,
      
      especialidad: especialidad,
      fecha: fechaHora,
      notas: notas,
      medicamentos: medicamentos,
      
      pacienteRut: pacienteRut,
    };
    console.log(parametros);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/subirEvolucion",
        {
          doctor: doctor,
          
          especialidad: especialidad,
          fecha: fechaHora,
          notas: notas,
          medicamentos: medicamentos,
        
          pacienteRut: pacienteRut,
        }
      );
      //const data = await response.json();

      if (response.status === 201) {
        alert("Cita registrada con éxito");
        setDoctor("");
        setMedicamentos("");
        setEspecialidad("");
        setFechaHora(new Date().toISOString());
        setPacienteRut("");
        setNota("");
      } else if (response.status === 500) {
        alert("Error al registrar cita");
      } else {
        alert("Ocurrió un error");
      }
    } catch (error) {
      console.error("Error al reservar la cita:", error.message);
      toast.error("¡Algo ha fallado a la hora de registrar la cita!");
    }
  };
  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div style={formStyle}>
          <div className="row">
            <div className="p-4 d-flex flex-column justify-content-center align-items-center">
              <h2 className="display-4">Registrar Hora</h2>
              <form onSubmit={handleSubirHora}>
                
              <div className="mb-2">
                  <label htmlFor="doctor" className="form-label fs-4">
                    doctor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="doctor"
                    placeholder="doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="especialidad" className="form-label fs-4">
                    Especialidad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="especialidad"
                    placeholder="Odontología"
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="fecha" className="form-label fs-4">
                    Fecha y Hora
                  </label>
                  <Toaster
                    richColors
                    position="top-center"
                    toastOptions={{
                      style: { width: "100%", height: "auto" },
                    }}
                  />
                  <DatePicker
                    name="fechaHora"
                    selected={new Date(fechaHora)}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" // Formato personalizado
                    timeFormat="HH:mm"
                    timeIntervals={15}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="notas" className="form-label fs-4">
                    notas
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="notas"
                    placeholder="notas"
                    value={notas}
                    onChange={(e) => setNota(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="medicamentos" className="form-label fs-4">
                    medicamentos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicamentos"
                    placeholder="medicamentos"
                    value={medicamentos}
                    onChange={(e) => setMedicamentos(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="pacienteRut" className="form-label fs-4">
                    Rut Paciente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pacienteRut"
                    placeholder="9-12345678"
                    value={pacienteRut}
                    onChange={(e) => setPacienteRut(e.target.value)}
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
    </>
  );
}

export default UsuarioDoctor;
