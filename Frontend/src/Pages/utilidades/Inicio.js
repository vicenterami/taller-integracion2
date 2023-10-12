import React, {useState, useEffect} from 'react'

const Inicio = () => {

return (
    <div className="container">
    <header className="text-center mt-5">
      <h1>Bienvenido a mi página de inicio</h1>
    </header>

    <div className="row mt-5">
      <div className="col-md-6">
        <h2>Sobre nosotros</h2>
        <p>Descripción de tu sitio web o empresa.</p>
      </div>
      <div className="col-md-6">
        <h2>Nuestros servicios</h2>
        <ul>
          <li>Servicio 1</li>
          <li>Servicio 2</li>
          <li>Servicio 3</li>
        </ul>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-12">
        <h2>Contacto</h2>
        <p>Ponte en contacto con nosotros:</p>
        <p>Email: contacto@tudominio.com</p>
        <p>Teléfono: +123-456-7890</p>
      </div>
    </div>
  </div>
);
}

export default Inicio