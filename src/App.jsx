import { useState } from "react";
import FormTask from "./components/FormTask";

function App() {
  const [listaTareas, setListaTareas] = useState([
    { name: "Mi primer tarea", estado: false },
    { name: "Mi segunda tarea", estado: false },
    { name: "Mi tercera tarea", estado: false },
  ]);

  function createTask(taskName) {
    if (listaTareas.find((task) => task.name === taskName)) {
      alert("La tarea ya existe");
    } else {
      setListaTareas([
        ...listaTareas,
        {
          name: taskName,
          estado: false,
        },
      ]);
    }

    // if(!listaTareas.find(task => task.name === taskName)){
    //   setListaTareas([...listaTareas, {
    //     name : taskName,
    //     estado: false
    //   }])
    // }
  }

  return (
    <div>
      <FormTask createTask={createTask} />

      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {listaTareas.map((e) => (
            <tr key={e.name}>
              <td>{e.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
