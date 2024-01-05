import { useEffect, useState } from "react";
import TaskTable from "./components/TaskTable";
import FormTask from "./components/FormTask";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let valor = localStorage.getItem("tasks");
    if (valor) {
      setTareas(JSON.parse(valor));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tareas));
  }, [tareas]);

  function createTask(newTask) {
    if (tareas.find((e) => e.name === newTask)) {
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

  const toggleTask = task => {
    setTareas(
      tareas.map((e) => ((e.name === task.name) ? { ...e, estado: !e.estado } : e))
    );
  }

  return (
    <div>
      <FormTask createTask={createTask} />
      <TaskTable tasks={tareas} toggleTask = {toggleTask}/>
    </div>
  );
}

export default App;
