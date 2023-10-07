import React, {useState, useEffect} from 'react'

const Citas = () => {
    const [cita, setCita] = useState([]);

    useEffect(() => {
        const citasDelPaciente = async () => {
            try {
                const response = await fetch("http://45.236.129.38:3000/api/citas/disponibles");
                if (response.status === 200) {
                    const data = await response.json(); // Parsea la respuesta JSON
                    setCita(data.citas);
                    //console.log(data);
                } else {
                    console.error("Error en las citas");
                }
                
            } catch (error) {
                console.error("Error en las citasss:", error);
            }
            
        }
        citasDelPaciente();
    },[])
    //console.log(cita)

    //funcion que mapea las citas almecenadas en la base de datos 
    const agendas = cita.map((item) => 
        <div key={item._id}>
            <div className='row'>Doctor: {item.doctor}</div>
            <div className='row'>Especialidad: {item.especialidad}</div>
            <div className='row'>Fecha: {item.fecha}</div>
        </div>
    )

  return (
    <div className='container'>
        <div className='col align-items-center'>
            {agendas}
        </div>
    </div>
  )
}

export default Citas