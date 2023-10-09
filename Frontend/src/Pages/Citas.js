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
  )
}

export default Citas