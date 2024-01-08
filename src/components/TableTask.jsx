import React from "react";
import TaskRow from "./TaskRow";

function TableTask({ tareas, toggleTask, valor = false }) {
  const eventHandler2 = () => {
    return tareas
      .filter((e) => e.estado === valor)
      .map((e) => <TaskRow toggleTask={toggleTask} e={e} key={e.nombre} />);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{eventHandler2(valor)}</tbody>
    </table>
  );
}

export default TableTask;
