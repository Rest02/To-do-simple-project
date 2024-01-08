import React, { useState } from "react";

function FormTask({ createTask }) {
  const [name, setName] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    createTask(name);
    setName("");
  };

  return (
    <form onSubmit={eventHandler} className="my-2 row">
      <div className="col-9">
        <input
          placeholder="Ingresa el nombre de tu tarea"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Guardar</button>
      </div>
    </form>
  );
}

export default FormTask;
