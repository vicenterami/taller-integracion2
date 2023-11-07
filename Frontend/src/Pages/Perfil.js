import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; 
import logo from '../Images/logo.png'; 
import ArrowComponent from './utilidades/BackArrow';

function Perfil() {
  const { userData } = useAuth();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (userData && userData.rut) {
        try {
          const response = await axios.get(`http://localhost:3000/api/User/${userData.rut}`);
          setData(response.data.user);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [userData]);

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-8 mb-4 mb-lg-0">
          
            <div className="" style={{ borderRadius: '.5rem', background:'white', color:'black' }}>
              <div className="row g-0 ">
                <div className="col-md-5 gradient-custom text-center "
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem',  backgroundColor:'#007BFF' }}>
                  <div className='m-1' style={{width:'20%'}}> <ArrowComponent to="/Home"/></div>
                  <img src={logo} style={{ width: '180px', marginTop: '25px', borderRadius: '.5rem' }} alt="Logo" />

                  <h5 className="card-title" style={{ color: 'black', marginTop: '20px', fontSize: '1.5rem' }}>{data.nombre}</h5>
                  <i className="far fa-edit mb-3"></i>
                </div>
                <div className="col-md-7">
                  <div className="card-body p-4">
                    <h6>Informacion</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted" style={{ fontSize: '1.2rem' }}>{data.correo}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Numero</h6>
                        <p className="text-muted" style={{ fontSize: '1.2rem' }}>{data.telefono}</p>
                      </div>
                    </div>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Rut</h6>
                        <p className="text-muted" style={{ fontSize: '1.2rem' }}>{data.rut}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
