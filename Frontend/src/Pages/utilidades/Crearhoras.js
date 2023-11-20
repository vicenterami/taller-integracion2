import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import logo from "../../Images/logo.png"
import ArrowComponent from "./BackArrow";
// agregar el datepicker para fecha y hora(un nuevo componente q se instala
// con npm install react-datepicker )
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Toaster, toast } from 'sonner'

  
function Crearhoras() {
  const [doctor, setDoctor] = useState("");
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

  const [disponible, setDisponible] = useState(null);
  const handleOptionChange = (opcion) => {
    if(disponible !== opcion) {
      setDisponible(opcion);
    }
  };
  //

  const [pacienteRut, setPacienteRut] = useState("");
  //
  const [doctorRut, setDoctorRut] = useState("");
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
      const response = await axios.post("http://45.236.129.38:3000/api/subirHora", {
        'doctor': doctor,
        'doctorRut':doctorRut,
        'especialidad': especialidad,
        'fecha': fechaHora,
        'disponible': disponible,
        'reservada': !disponible,
        'pacienteRut': pacienteRut,
      });
      //const data = await response.json();

      if (response.status === 201) {
        toast.success("Cita registrada con éxito");
        setDoctor('');
        setDoctorRut('');
        setEspecialidad("");
        setFechaHora(new Date().toISOString());
        setDisponible(null);
        setPacienteRut('');
      } else if (response.status === 500) {
        toast.error('Error al registrar cita');
      } else {
        toast.error('Ocurrió un error');
      }
    } catch (error) {
      console.error('Error al reservar la cita:', error.message);
      toast.error('¡Algo ha fallado a la hora de registrar la cita!')
    }
  }
  return (
    <div>
      


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
              <h2 className="display-4">Registrar Hora</h2>
              <form onSubmit={handleSubirHora}>
              <div className="mb-2">
                    <label htmlFor="doctorRut" className="form-label fs-4">
                      RUT del Doctor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="doctorRut"
                      placeholder="Ej: 12.345.678-9"
                      value={doctorRut}
                      onChange={(e) => setDoctorRut(e.target.value)}
                    />
                  </div>
               
               
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

                  <Toaster richColors position="top-center" toastOptions={{style: { width:'100%' , height:'auto' },    }}/> 


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
                  <label htmlFor="disponible" className="form-label fs-4">
                    Disponible
                  </label>
                  <div className="d-flex justify-content-between">
                    <label className="mr-3">
                      Sí
                      <input
                        type="radio"
                        name="choice"
                        onChange={() => handleOptionChange(true)}
                        checked={disponible === true}
                      />
                    </label>
                    <label className="mr-3">
                      NO
                      <input
                        type="radio"
                        name="choice"
                        onChange={() => handleOptionChange(false)}
                        checked={disponible === false}
                      />
                    </label>
                  </div>
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
    </div>

      
    </div>
  );
}

export default Crearhoras;
