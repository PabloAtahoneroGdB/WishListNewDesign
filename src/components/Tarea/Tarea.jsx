import React, { useEffect, useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import './Tarea.css';
export default function Tarea({ tarea, eliminarTarea, completarTarea }) {
    const [age, setAge] = useState(20);

    useEffect(() => {
        let ageInterval;
    
        if (tarea.completada) {
            // si la deseo es completado dejo de contar
            // y limpio la intervalo
            setAge(20);
            clearInterval(ageInterval);
        } else {
            // si ña tarea no está completada
            // creo un intervalo que decrementa en 1
            // la edad de la tarea cada 1000 milisegundos
            ageInterval = setInterval(() => {
                setAge((currentAge) => {
                    // Verificar si ya llegó a cero antes de decrementar
                    if (currentAge > 0) {
                        return currentAge - 1;
                    } else {
                        // Detener el intervalo cuando la edad llega a cero
                        clearInterval(ageInterval);
                        return 0;
                    }
                });
            }, 1000);
        }
    
        // la función que devuelve return se ejecuta
        //  solo cuando se desmonta el componente
        return () => clearInterval(ageInterval);
    }, [tarea.completada]);


    return (
        <div className={`tarea 
            ${tarea.completada ? 'completadaFondo' : ''} 
            ${age > 5 && age<=10 ? 'cuidado' : ''}
            ${age > 0 && age<=5 ? 'proximoAlFin' : ''}
            ${age == 0 ? 'seFodeu' : ''}`}>
            
            <RxCrossCircled className='removeBtn' onClick={() => eliminarTarea(tarea.id)} />
            <p><span className='tag'>Id:  </span>{tarea.id}</p>
            <p>Tarea:<span className={`tagr ${tarea.completada ? 'completada' : ''}`}>  {tarea.texto}</span></p>
            {!tarea.completada && <p>Tiempo restante{age}</p>}
            <p>¿La acabaste?  <span onClick={() => completarTarea(tarea.id)} className='paracompletar'> {(tarea.completada) ? <FaCheck /> : <ImCross />}</span> </p>
        </div>
    );
}