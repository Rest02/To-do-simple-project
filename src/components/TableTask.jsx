import React from "react";
import TaskRow from "./TaskRow";

function TableTask({ tareas, toggleTask, valorEstado = false }) {
  const table2 = () => {
    return tareas
    .filter((e) => e.estado == valorEstado )
    .map((e) => (
      <TaskRow e={e} key={e.nombre} toggleTask={toggleTask} />
    ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secundary">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>

      <tbody>
        {table2()}
      </tbody>
    </table>
  );
}

export default TableTask;
