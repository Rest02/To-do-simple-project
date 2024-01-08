import React from "react";

function VisualizarTareas({setValor, deleteTask, isChecked}) {
  return (
    <div>
      <input checked={isChecked} type="checkbox" onChange={(e) => setValor(e.target.checked)} />{" "}
      <label>Presiona para ver tareas realizada</label>
      <button onClick={()=>deleteTask()}>Eliminar tareas realizadas</button>
    </div>
  );
}

export default VisualizarTareas;
