import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import ArrowComponent from './utilidades/BackArrow';
import { Toaster, toast } from 'sonner'

const Reservar = () => {
  const { userData } = useAuth();
  const [citasDisponibles, setCitasDisponibles] = useState([]);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  useEffect(() => {
    obtenerCitasDisponibles();
  }, []);

  const obtenerCitasDisponibles = async () => {
    try {
      const response = await axios.get('http://192.168.1.10:3000/api/citas/disponibles');
      const citas = response.data.citas;
      setCitasDisponibles(citas);
    } catch (error) {
      console.error(error);
    }
  };

  const reservarCita = async (citaId) => {
    try {
      const response = await axios.post('http://192.168.1.10:3000/api/citas/reservar', {
        citaId,
        pacienteId: userData.rut,
      });

      if (response.status === 200) {
        obtenerCitasDisponibles();
        toast.success('¡La cita se ha registrado correctamente!')
      } else {
        console.error('Error al reservar la cita:', response.data.message);
        toast.error('¡Algo ha fallado a la hora de registrar la cita!')
        
      }
    } catch (error) {
      console.error('Error al reservar la cita:', error.message);
      toast.error('¡Algo ha fallado a la hora de registrar la cita!')
    }
  };


  return (
    <div className="container">
      <ArrowComponent to="/Home"/>
      <div className="text-center">
        <h1>Horas Médicas Disponibles</h1>
        <p>{userData.nombre}, Elige tu Hora</p>

        <h2>Citas Disponibles:</h2>
        <div className="row justify-content-center">
          {citasDisponibles.map((cita) => (
            <div
              key={cita._id}
              className="col-md-4 mb-3" 
              onClick={() => setCitaSeleccionada(cita)}
            >
              <div
                className='card border-primary'
                style={{ padding: '10px' }}
              >
                <p>Doctor: {cita.doctor}</p>
                <p>Especialidad: {cita.especialidad}</p>
                <p>Fecha: {cita.fecha}</p>
                <p>Disponible: {cita.disponible ? 'Sí' : 'No'}</p>
                <Toaster richColors position="top-center" toastOptions={{style: { width:'100%' , height:'auto' },    }}/> 
                {(
                  <button
                    className="btn btn-primary"
                    
                    onClick={() => reservarCita(citaSeleccionada._id)}
                  >
                    Reservar Cita
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reservar;
