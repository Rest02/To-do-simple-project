import React from "react";

function TaskRow({e, toggleTask}) {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {e.nombre}
        <input type="checkbox" checked={e.estado} onChange={()=>toggleTask(e.nombre)} />
      </td>
    </tr>
  );
}

export default TaskRow;
