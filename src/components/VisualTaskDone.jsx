import React from "react";

function VisualTaskDone({setValorEstado, deleteTask, isChecked}) {

    const eventHandDelete = () => {
        deleteTask()
    }


  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
     <div className="form-check form-switch">
     <input
        className="form-check-input"
        type="checkbox"
        onChange={(e) => setValorEstado(e.target.checked)} checked={isChecked}
      />{" "}
      <label>Click para ver tareas realizadas</label>

     </div>
      <button onClick={() => eventHandDelete()} className="btn btn-danger btn-sm">Borrar tarea</button>
    </div>
  );
}

export default VisualTaskDone;
