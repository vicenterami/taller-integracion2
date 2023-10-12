import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; 

const Reservar = () => {
  const { userData } = useAuth();
  const [citasDisponibles, setCitasDisponibles] = useState([]);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    obtenerCitasDisponibles();
  }, []);

  const obtenerCitasDisponibles = async () => {
    try {
      const response = await axios.get('http://45.236.129.38:3000/api/citas/disponibles');
      const citas = response.data.citas;
      setCitasDisponibles(citas);
    } catch (error) {
      console.error(error);
    }
  };

  const reservarCita = async (citaId) => {
    try {
      const response = await axios.post('http://45.236.129.38:3000/api/citas/reservar', {
        citaId,
        pacienteId: userData.rut,
      });

      if (response.status === 200) {
        obtenerCitasDisponibles();
        setModalVisible(true);
      } else {
        console.error('Error al reservar la cita:', response.data.message);
      }
    } catch (error) {
      console.error('Error al reservar la cita:', error.message);
    }
  };

  const isSelected = (cita) => citaSeleccionada && citaSeleccionada._id === cita._id;

  return (
    <div style={{ backgroundColor: '#252A31', padding: '20px' }}>
      <div>
        <h1>Horas Médicas Disponibles</h1>
        <p>
          {userData.nombre}, Elige tu Hora
        </p>

        <h2>Citas Disponibles:</h2>
        {citasDisponibles.map((cita) => (
          <div
            key={cita._id}
            style={{
              border: isSelected(cita) ? '2px solid #00ADB5' : '1px solid #ddd',
              padding: '10px',
              marginBottom: '10px',
            }}
            onClick={() => setCitaSeleccionada(cita)}
          >
            <p>Doctor: {cita.doctor}</p>
            <p>Especialidad: {cita.especialidad}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Disponible: {cita.disponible ? 'Sí' : 'No'}</p>
          </div>
        ))}

        {citaSeleccionada && !citaSeleccionada.reservada && (
          <button
            style={{
              backgroundColor: '#00ADB5',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => reservarCita(citaSeleccionada._id)}
          >
            Reservar Cita
          </button>
        )}

        <div
          style={{
            display: modalVisible ? 'block' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              color:'black',
              textAlign: 'center',
            }}
          >
            <p>¡La cita se ha registrado correctamente!</p>
            <button
              style={{
                backgroundColor: '#00ADB5',
                color: 'black',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => setModalVisible(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservar;
