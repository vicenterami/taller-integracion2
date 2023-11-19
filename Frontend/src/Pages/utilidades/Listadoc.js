import React, { useState, useEffect } from 'react';

const ListaDoctores = () => {
    const [doctores, setDoctores] = useState([]);
    const [mensaje, setMensaje] = useState('');
  
    useEffect(() => {
      const obtenerDoctores = async () => {
        try {
          const response = await fetch('http://45.236.129.38:3000/api/usuarios/doctores', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            // Verifica si hay doctores en la respuesta
            if (data.doctores.length > 0) {
              setDoctores(data.doctores);
            } else {
              setMensaje('No hay doctores disponibles.');
            }
          } else {
            console.error('Error al obtener la lista de doctores.');
            setMensaje('Error al obtener la lista de doctores.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMensaje('Error de red al obtener la lista de doctores.');
        }
      };
  
      obtenerDoctores();
    }, []); // El array vacío significa que se ejecutará solo una vez al montar el componente
  
    return (
      <div>
        {/* Condición para verificar si hay doctores disponibles */}
        {doctores.length !== 0 ? (
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
              {doctores.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{doctor.nombre}</td>
                  <td>{doctor.correo}</td>
                  <td>{doctor.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p>No hay doctores disponibles.</p>
            <p>{mensaje}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ListaDoctores;