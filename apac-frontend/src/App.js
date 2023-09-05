import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Asegúrate de tener estas importaciones
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './HomePage';
import ProjectPlanning from './ProjectPlanning';
import TaskManagement from './TaskManagement';

const theme = createTheme(); // Crea un tema

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <nav>
        {/* Navbar (opcional) */}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectPlanning />} /> {/* Asegúrate de que la ruta sea correcta */}
        <Route path="/tareas" element={<TaskManagement />} />
        {/* Otras rutas aquí */}
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
