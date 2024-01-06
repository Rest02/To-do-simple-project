import React from "react";

function TaskRow({e, toggleTask}) {
  return (
    <tr >
      <td>
        {e.nombre}
        <input type="checkbox" checked={e.estado} onChange={()=>toggleTask(e)}/>
      </td>
    </tr>
  );
}

export default TaskRow;
