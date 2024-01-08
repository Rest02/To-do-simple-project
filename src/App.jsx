import { useEffect, useState } from "react";
import "./App.css";
import FormTask from "./components/FormTask";
import TableTask from "./components/TableTask";
import VisualTaskDone from "./components/VisualTaskDone";

function App() {
  const [tareas, setTareas] = useState([
    { nombre: "Mi primera tarea", estado: false },
    { nombre: "Mi segunda tarea", estado: false },
    { nombre: "Mi tervera tarea", estado: false },
  ]);

  const [valorEstado, setValorEstado] = useState(false);

  useEffect(() => {
    let value = localStorage.getItem("tasks");
    if (value) {
      setTareas(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tareas));
  }, [tareas]);

  function createTask(taskName) {
    if (tareas.find((e) => e.nombre == taskName)) {
      alert("Su tarea ya fue ingresada");
    } else {
      setTareas([
        ...tareas,
        {
          nombre: taskName,
          estado: false,
        },
      ]);
    }
  }

  function deleteTask() {
    if (window.confirm("Esta seguro de lo que esta haciendo")) {
      setTareas(tareas.filter((e) => e.estado == false));
    }
    setValorEstado(false);
  }

  function toggleTask(taskName) {
    setTareas(
      tareas.map((e) =>
        e.nombre == taskName ? { ...e, estado: !e.estado } : e
      )
    );
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <FormTask createTask={createTask} />
        <TableTask tareas={tareas} toggleTask={toggleTask} />

        {/* <VisualTaskDone setValorEstado={setValorEstado} valorEstado = {valorEstado}/> */}
        <VisualTaskDone
          setValorEstado={(checked) => setValorEstado(checked)}
          deleteTask={deleteTask}
          isChecked={valorEstado}
        />

        {valorEstado == true ? (
          <TableTask
            tareas={tareas}
            toggleTask={toggleTask}
            valorEstado={valorEstado}
          />
        ) : null}
      </div>
    </main>
  );
}

export default App;
