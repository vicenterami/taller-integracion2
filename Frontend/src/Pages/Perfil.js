import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";

function Perfil() {
  const { userData } = useAuth();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (userData && userData.rut) {
        try {
          const response = await axios.get(`http://192.168.4.22:3000/api/User/${userData.rut}`);
          setData(response.data.user);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [userData]);

  return (
    <div className="perfil-container d-flex align-items-center justify-content-center vh-100">
        <div className="perfil-header border border-success p-5 text-center" >
            <h2>Mi Perfil</h2>
            
        </div>
      <div className="perfil-content border border-danger p-5 text-center" style={{ fontSize: "24px" }}>
            
            {data ? (
                <div className="user-details">
                <p>
                    <strong>Nombre:</strong> {data.nombre}
                </p>
                <p>
                    <strong>Rut:</strong> {data.rut}
                </p>
                <p>
                    <strong>Correo:</strong> {data.correo}
                </p>
                <p>
                    <strong>Teléfono:</strong> {data.telefono}
                </p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
      </div>
    </div>
  );
}

export default Perfil;
