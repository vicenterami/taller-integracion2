import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import { Toaster, toast } from "sonner";

function UsuarioDoctor() {
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(userData);
  const opcionesEspecialidades = [
    'Odontología',
    'Cardiología',
    'Pediatría',
    'Ginecología',
    'Neurología',
    'Oftalmología',
  ];

  const [especialidad, setEspecialidad] = useState("");
  const handleSeleccion = (event) => {
    // Obtener las opciones seleccionadas
    const opcionSeleccionada = event.target.value;    
    // Actualizar el estado con las opciones seleccionadas
    setEspecialidad(opcionSeleccionada);
  };
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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/subirEvolucion",
        {
          doctor: data.nombre,
          especialidad: especialidad,
          fecha: fechaHora,
          notas: notas,
          medicamentos: medicamentos,
          pacienteRut: pacienteRut,
        }
      );

      if (response.status === 201) {
        toast.success("Seguimiento registrado con éxito");
        setMedicamentos("");
        setEspecialidad("");
        setFechaHora(new Date().toISOString());
        setPacienteRut("");
        setNota("");
      } else if (response.status === 500) {
        toast.error("Error al registrar seguimiento");
      } else {
        toast.error("Ocurrió un error");
      }
    } catch (error) {
      console.error("Error al reservar la seguimiento:", error.message);
      toast.error("¡Algo ha fallado a la hora de registrar la seguimiento!");
    }
  };

  return (
    <div>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div style={formStyle}>
          <div className="row">
            <div className="p-4 d-flex flex-column justify-content-center align-items-center">
              <h2 className="display-4">Seguimiento</h2>
              <form onSubmit={handleSubirHora}>
                <div className="mb-2">
                    <label htmlFor="especialidades" className="form-label fs-4">
                      Especialidades
                    </label>
                    <select
                      id="especialidad"
                      className="form-control"
                      value={especialidad}
                      onChange={handleSeleccion}
                    >
                      <option value="" disabled>
                        Seleccionar especialidad
                      </option>
                      {opcionesEspecialidades.map((opcion) => (
                        <option key={opcion} value={opcion.toString()}>
                          {opcion}
                        </option>
                      ))}
                    </select>
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
                    Notas
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="notas"
                    placeholder="Notas"
                    value={notas}
                    onChange={(e) => setNota(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="medicamentos" className="form-label fs-4">
                    Medicamentos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicamentos"
                    placeholder="Medicamentos"
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
                    Subir Seguimiento
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

export default UsuarioDoctor;
