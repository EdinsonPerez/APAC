import React, { useState } from 'react';
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';

function ProjectPlanning() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleProjectCreation = () => {
    // Aquí puedes enviar los datos del proyecto al backend para su creación
  };

  return (
    <div>
      <h2>Crear un Nuevo Proyecto</h2>
      <TextField
        label="Nombre del Proyecto"
        variant="outlined"
        fullWidth
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <TextField
        label="Descripción del Proyecto"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleProjectCreation}
      >
        Crear Proyecto
      </Button>
    </div>
  );
}

export default ProjectPlanning;
