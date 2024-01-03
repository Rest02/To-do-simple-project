import React from "react";
import { useState } from "react";

function FormTask() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tarea", nombre);
    setNombre("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese el nombre de la tarea"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <button>Guardar</button>
    </form>
  );
}

export default FormTask;
