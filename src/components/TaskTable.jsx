import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tareas, toggleTask, ValorDelEstado=false}) {
  const miFuncion = () => {
    return( 
    tareas
    .filter((e) => e.estado === ValorDelEstado )
    .map((e) => (
      <TaskRow e={e} key={e.nombre} toggleTask={toggleTask} />
    )))
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{miFuncion(ValorDelEstado)}</tbody>
    </table>
  );
}

export default TaskTable;
