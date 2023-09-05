import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function TaskManagement() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskCreation = () => {
    // Aquí puedes enviar los datos de la tarea al backend para su creación
  };

  return (
    <div>
      <h2>Gestión de Tareas</h2>
      <TextField
        label="Nombre de la Tarea"
        variant="outlined"
        fullWidth
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <TextField
        label="Descripción de la Tarea"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleTaskCreation}
      >
        Crear Tarea
      </Button>
    </div>
  );
}

export default TaskManagement;
