import FormTask from "./components/FormTask";
import { useEffect, useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);


  useEffect(()=>{
    let valor = localStorage.getItem("tasks")
    if (valor){
      setTareas(JSON.parse(valor))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tareas));
  }, [tareas]);

  function createTask(taskName) {
    if (tareas.find((e) => e.name === taskName)) {
      alert("Su tarea ya fue puesta");
    } else {
      setTareas([
        ...tareas,
        {
          name: taskName,
          estado: false,
        },
      ]);
    }
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
          {tareas.map((e) => (
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
