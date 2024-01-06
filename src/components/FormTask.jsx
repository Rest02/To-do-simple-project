import React, { useEffect, useState } from "react";

function FormTask({ createTask }) {
  const [name, setName] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    setName("");
    createTask(name);
  };

  return (
    <form onSubmit={eventHandler} action="">
      <input
        type="text"
        placeholder="Ingrese el nombre de su tarea"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
      />
      <button>Guardar</button>
    </form>
  );
}

export default FormTask;
