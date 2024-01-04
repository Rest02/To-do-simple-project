import React, { useState } from 'react'

function FormTask({createTask}) {

    const [nombre, setNombre] = useState("")
    
    const eventHandler = (e)=>{
        e.preventDefault()
        localStorage.setItem("tasks",nombre)
        createTask(nombre)
        setNombre("")
    }


  return (
    <form onSubmit={eventHandler}>
        <input type="text" placeholder='Ingrese su tarea' onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
        <button>Guardar</button>
    </form>
  )
}

export default FormTask