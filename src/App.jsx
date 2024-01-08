import { useEffect, useState } from "react";
import "./App.css";
import FormTask from "./components/FormTask";
import TableTask from "./components/TableTask";
import VisualizarTareas from './components/VisualizarTareas'

function App() {
  const [tareas, setTareas] = useState([
    { nombre: "Mi primer tarea", estado: true },
    { nombre: "Mi segunda tarea", estado: false },
    { nombre: "Mi tercera tarea", estado: false },
  ]);
  const [valor, setValor] = useState(false);

  useEffect(() => {
    let value = localStorage.getItem("tasks");
    if (value) {
      setTareas(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tareas));
  }, [tareas]);

  function createTask(newTask) {
    if (tareas.find((e) => e.nombre == newTask)) {
      alert("Su tarea ya se encuentra en la lista");
    } else {
      setTareas([
        ...tareas,
        {
          nombre: newTask,
          estado: false,
        },
      ]);
    }
  }

  function toggleTask(taskName) {
    setTareas(
      tareas.map((e) =>
        e.nombre == taskName ? { ...e, estado: !e.estado } : e
      )
    );
  }


  function deleteTask(taskName){
    if(window.confirm("Estas seguro de lo que quieres hacer ?")){
      setTareas(tareas.filter((e)=> e.estado == false ))
    }
    setValor(false)
  }


  return (
    <>
      <FormTask createTask={createTask} />
      <TableTask tareas={tareas} toggleTask={toggleTask} />

      <VisualizarTareas isChecked={valor}
      setValor = {(checked)=>setValor(checked)} deleteTask={deleteTask}/>

      {valor == true ? (
        <TableTask tareas={tareas} toggleTask={toggleTask} valor={valor} />
      ) : null}
    </>
  );
}

export default App;
