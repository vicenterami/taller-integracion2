import React, {useState, useEffect} from 'react'
import { useAuth } from "../../AuthContext";

const Mishoras = () => {
  const [hora, setHora] = useState([]);
  const { userData } = useAuth();
  const [mensaje, setMensaje] = useState();

  useEffect(() => {
      const evolucionDelPaciente = async () => {
          try {
              const response = await fetch(`http://localhost:3000/api/citas/disponibles/${userData.rut}`);
              if (response.status === 200) {
                  const data = await response.json(); // Parsea la respuesta JSON
                  //si existen datos lo colo sino pongo un mensaje de la base de datos
                  if (data.citas) {
                    setHora(data.citas);
                  } else {
                    setMensaje(data.message)
                  }
              } else {
                  console.error("Error");
              }
              
          } catch (error) {
              console.error("Error:", error);
          }
          
      }
      evolucionDelPaciente();
    },[])
    //funcion que mapea las citas almecenadas en la base de datos 
    const horas = hora.map((item, index) => 
        <tr key={item._id}>
            <th scope='row'>{index+1}</th>
            <th scope='row'>{item.doctor}</th>
            <th scope='row'>{item.especialidad}</th>
            <th scope='row'>{item.fecha}</th>
        </tr>
    )
    
    
    return (
      <div>
        {/* condicional que si la evolucion no esta vacia muestre los datos del seguimiento */}
        {horas.length !== 0  ? (
            <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Doctor</th>
                    <th scope='col'>Especialidad</th>
                    <th scope='col'>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {horas}
            </tbody>
            </table>
        ) : (
            <div>
                <p>No tiene seguimiento </p>
                <p>{mensaje}</p>
            </div>
        )}
      </div>
      )

}

export default Mishoras