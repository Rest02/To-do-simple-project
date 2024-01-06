import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tareas, toggleTask, muestraCompletadas=false}) {
  const TaskTableRows = (valorDelEstado) => {
    return (
      tareas
      .filter(tareas => tareas.estado === valorDelEstado)
      .map((e) => (
      <TaskRow e={e} key={e.nombre} toggleTask={toggleTask} />
    ))
    )
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{TaskTableRows(muestraCompletadas)}</tbody>
    </table>
  );
}

export default TaskTable;
