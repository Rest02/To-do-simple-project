import { useEffect, useState } from "react";
import FormTask from "./components/FormTask";

function App() {
  const [tareas, setTareas] = useState([]);




useEffect(()=>{
  let valor = localStorage.getItem("tasks")  
  if(valor){
    setTareas(JSON.parse(valor))
  }
}, [])


  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tareas));
  }, [tareas])







  function createTask(newTask) {
    if (
      tareas.find((e)=> e.name === newTask)
    ) {
      alert("Su tarea ya esta");
    } else {
      setTareas([
        ...tareas,
        {
          name: newTask,
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
