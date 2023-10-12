import React, {useEffect, useState} from 'react'
import { useAuth } from "../AuthContext";

const Evolucion = () => {
    const [evol, setEvol] = useState([]);
    const { userData } = useAuth();

    useEffect(() => {
        const evolucionDelPaciente = async () => {
            try {
                const response = await fetch(`http://45.236.129.38:3000/api/evoluciones/${userData.rut}`);
                if (response.status === 200) {
                    const data = await response.json(); // Parsea la respuesta JSON
                    setEvol(data.evoluciones);
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
        </tr>
    )

  return (
    <table className='table table-dark table-hover'>
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Doctor</th>
                <th scope='col'>Notas</th>
                <th scope='col'>Hora</th>
            </tr>
        </thead>
        <tbody>
            {evolucion}
        </tbody>
    </table>
  )
}

export default Evolucion