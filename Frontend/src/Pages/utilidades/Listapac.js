import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ListaPacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const user = localStorage.getItem("userData");
    const userData = JSON.parse(user);
    useEffect(() => {
      const obtenerPacientes = async () => {
        try {
          const response = await axios.post('http://localhost:3000/api/listaPacientes',
          {rut: userData.rut,});

          if (response.status === 200) {
            // Axios ya realiza el análisis JSON automáticamente
            const data =  response.data;
            // Verifica si hay pacientes en la respuesta
            if (data.pacientes.length > 0) {
              setPacientes(data.pacientes);
            } else {
              setMensaje('No hay pacientes disponibles.');
            }
          } else {
            console.error('Error al obtener la lista de pacientes.');
            setMensaje('Error al obtener la lista de pacientes.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMensaje('Error de red al obtener la lista de pacientes.');
        }
      };
  
      obtenerPacientes();
    }, [userData.rut]); // El array vacío significa que se ejecutará solo una vez al montar el componente
  
    return (
      <div>
        {/* Condición para verificar si hay doctores disponibles */}
        {pacientes.length !== 0 ? (
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Correo</th>
                <th scope='col'>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, index) => (
                <tr key={paciente.info._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{paciente.info.nombre}</td>
                  <td>{paciente.info.correo}</td>
                  <td>{paciente.info.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p>{mensaje}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ListaPacientes;