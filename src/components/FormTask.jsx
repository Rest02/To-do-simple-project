import React, { useState } from "react";

function FormTask({createTask}) {
  const [name, setName] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    console.log(name);
    createTask(name)
    setName("");
  };

  return (
    <form onSubmit={eventHandler}>
      <input
        type="text"
        placeholder="Ingresa el nombre de tu tarea"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        autoFocus
      />
      <button>Guardar</button>
    </form>
  );
}

export default FormTask;
