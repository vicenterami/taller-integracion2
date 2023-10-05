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
    console.log(cita)
    const agendas = cita.map((item) => 
        <div key={item._id}>
            <p>Doctor: {item.doctor}</p>
            <p>Especialidad: {item.especialidad}</p>
            <p>Fecha: {item.fecha}</p>
        </div>
    )

  return (
    <div className='row'>
        <ul>
            {agendas}
        </ul>
        
    </div>
  )
}

export default Citas