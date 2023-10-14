import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Citas = () => {
    const navigate = useNavigate();
    const [cita, setCita] = useState([]);

    const handleIrReservar = () => {
        // Cambia la ruta a "/perfil" cuando se hace clic en el botón
        navigate("/reservar");
      };
    
    useEffect(() => {
        const citasDelPaciente = async () => {
            try {
                const response = await fetch("http://45.236.129.38:3000/api/citas/disponibles");
                if (response.status === 200) {
                    const data = await response.json(); // Parsea la respuesta JSON
                    setCita(data.citas);//le indico el nombre del objeto
                } else {
                    console.error("Error en las citas");
                }
                
            } catch (error) {
                console.error("Error en las citasss:", error);
            }
            
        }
        citasDelPaciente();
    },[])

    //funcion que mapea las citas almecenadas en la base de datos 
    const agendas = cita.map((item, index) => 
        <tr key={item._id}>
            <th scope='row'>{index+1}</th>
            <th scope='row'>{item.doctor}</th>
            <th scope='row'>{item.especialidad}</th>
            <th scope='row'>{item.fecha}</th>
        </tr>
    )

  return (
    <><div><button onClick={handleIrReservar}>Ir a reservar</button></div>
    
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
              {agendas}
          </tbody>
      </table></>
  )
}

export default Citas