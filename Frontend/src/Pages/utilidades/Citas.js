import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Citas = () => {
    const navigate = useNavigate();
    const [cita, setCita] = useState([]);
    const [mensaje, setMensaje] = useState();

    const handleIrReservar = () => {
        // Cambia la ruta a "/perfil" cuando se hace clic en el botón
        navigate("/reservar");
      };
    
    useEffect(() => {
        const citasDelPaciente = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/citas/disponibles");
                if (response.status === 200) {
                    const data = await response.json(); // Parsea la respuesta JSON
                    //si existen datos lo colo sino pongo un mensaje de la base de datos
                    if (data.citas) {
                        setCita(data.citas);//le indico el nombre del objeto
                    } else {
                        setMensaje(data.message)
                    }
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
    <>
        
        {/* condicional que si la agenda no esta vacia muestre los datos del seguimiento */}
        {agendas.length !== 0 ? (
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
        </table>
        ) : (
            <div>
                <p>No existen horas disponibles</p>
                <p>{mensaje}</p>
            </div>
        )}
        <div className='d-flex justify-content-center'>
            <button className='btn btn-outlined btn-primary' style={{border: '3px solid #428bca',background: '#428bca', color:'white'}} onClick={handleIrReservar}>Ir a reservar</button>
        </div>
      </>

  )
}

export default Citas