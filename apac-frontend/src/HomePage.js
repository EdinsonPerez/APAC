import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/tareas">Tareas</Link>
          </li>
        </ul>
      </nav>

      <h1>Bienvenido a APAC</h1>
      <p>Un asistente de proyecto y coaching AI</p>
    </div>
  );
}

export default HomePage;
