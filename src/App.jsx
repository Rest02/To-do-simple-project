import { useState, useEffect } from "react";
import FormTask from "./components/FormTask";
import TaskTable from "./components/TaskTable";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let value = localStorage.getItem("tasks");
    if (value) {
      setTareas(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tareas));
  }, [tareas]);

  function createTask(newTaskName) {
    if (tareas.find((e) => e.nombre === newTaskName)) {
      alert("Su tarea ya fue ingresada");
    } else {
      setTareas([
        ...tareas,
        {
          nombre: newTaskName,
          estado: false,
        },
      ]);
    }
  }

  function toggleTask(filterTask) {
    setTareas(
      tareas.map((e) =>
        e.nombre == filterTask.nombre ? { ...e, estado: !e.estado } : e
      )
    );
  }

  return (
    <div>
      <FormTask createTask={createTask} />
      <TaskTable tareas={tareas} toggleTask={toggleTask} />
      <TaskTable
        tareas={tareas}
        toggleTask={toggleTask}
        muestraCompletadas={true}
      />
    </div>
  );
}

export default App;
