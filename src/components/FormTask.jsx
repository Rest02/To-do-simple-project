import React, { useState } from "react";

function FormTask({ createTask }) {
  const [name, setName] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    createTask(name);
  };

  return (
    <form onSubmit={eventHandler}>
      <input
        type="text"
        placeholder="Ingresa tu tarea"
        onChange={(e) => setName(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default FormTask;
