import React, {useState, useEffect} from 'react'

const Inicio = () => {

return (
    <div className="container">
    <header className="text-center mt-5">
      <h1>Bienvenido a Cefam!</h1>
    </header>

    <div className="row mt-5">
      <div className="col-md-6">
        <h2>Sobre nosotros</h2>
        <p>Cefan es una pagina que te ayudara con tu tratamiento, llevando un seguimiento de este </p>
      </div>
      <div className="col-md-6">
        <h2>Nuestros servicios</h2>
        <ul>
          <li>solicitar horas</li>
          <li>consultar con su doctor</li>
          <li>seguimiento de sus medicamentos</li>
        </ul>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-12">
        <h2>Contacto</h2>
        <p>Ponte en contacto con nosotros:</p>
        <p>Email: cefam@consultas.cfn.cl</p>
        <p>Teléfono: +123-456-7890</p>
      </div>
    </div>
  </div>
);
}

export default Inicio