import React from 'react'
import { FaCheck } from "react-icons/fa";
import  './ListaDeTareas.css';
import { RxCrossCircled } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import Tarea from '../Tarea/Tarea';
export default function ListaDeTareas({listaDeTareas,setListaDeTareas}) {

  const eliminarTarea =(id)=>{
    setListaDeTareas(listaDeTareas.filter(tarea=> tarea.id !== id));
  }
  const cambiarCompletadoTarea=(idToggleCompletada)=>{
    let nuevaListaDeTareas =[...listaDeTareas];
    nuevaListaDeTareas.map((tarea)=>{
      if(tarea.id === idToggleCompletada){
        tarea.completada = !tarea.completada;
      }
     
    })
       //Ahora actualizo la lista de tareas
       setListaDeTareas(nuevaListaDeTareas);
  }
  return (
    
    <div>
       {listaDeTareas.map((tarea)=>
       <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} completarTarea={cambiarCompletadoTarea}/>
        // <div key={tarea.id} className={`tarea ${tarea.completada ? 'completadaFondo' : ''}`}>
        //   <RxCrossCircled className='removeBtn' onClick={()=>eliminarTarea(tarea.id)}/>
        //   <p><span className='tag'>Id:  </span>{tarea.id}</p>
        //   <p>Tarea:<span className={`tagr ${tarea.completada ? 'completada' : ''}`}>  {tarea.texto}</span></p> 
        //   <p>¿La acabaste?  <span onClick={()=>cambiarCompletadoTarea(tarea.id)} className='paracompletar'> {(tarea.completada) ? <FaCheck/> : <ImCross/>}</span> </p>
        // </div>
    )}
    </div>
  )
}
