import React, {useState, useEffect} from 'react'
import { useAuth } from "../../AuthContext";

const Seguimiento = () => {
  const [evol, setEvol] = useState([]);
  const { userData } = useAuth();
  const [mensaje, setMensaje] = useState();

  useEffect(() => {
      const evolucionDelPaciente = async () => {
          try {
              const response = await fetch(`http://45.236.129.38:3000/api/evoluciones/${userData.rut}`);
              if (response.status === 200) {
                  const data = await response.json(); // Parsea la respuesta JSON
                  if (data.evoluciones) {
                    setEvol(data.evoluciones);
                  } else {
                    setMensaje(data.message)
                  }

                //   console.log("data")
                //   console.log(data)

                //   console.log("mensaje")
                //   console.log(mensaje)

                //   console.log("evol")
                //   console.log(evol)

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
    const evolucion = evol.map((item, index) => 
        <tr key={item._id}>
            <th scope='row'>{index+1}</th>
            <th scope='row'>{item.doctor}</th>
            <th scope='row'>{item.notas}</th>
            <th scope='row'>{item.hora}</th>
            <th scope='row'>{item.medicamentos}</th>
        </tr>
    )

    
    return (
      <div>
        {/* condicional que si la evolucion no esta vacia muestre los datos del seguimiento */}
        {evol.length !== 0  ? (
            <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Doctor</th>
                    <th scope='col'>Notas</th>
                    <th scope='col'>Hora</th>
                    <th scope='col'>Medicamentos</th>
                </tr>
            </thead>
            <tbody>
                {evolucion}
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

export default Seguimiento