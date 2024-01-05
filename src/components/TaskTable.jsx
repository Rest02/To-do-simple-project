import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((e) => (
            <TaskRow e={e}  key={e.name} toggleTask={toggleTask}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
