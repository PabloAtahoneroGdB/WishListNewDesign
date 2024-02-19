import React, { useEffect, useState } from 'react';
import './FormularioTareas.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormularioTareas({ listaDeTareas, setListaDeTareas }) {
    /*Necesito:
    1.-Construir la tarea
    2.-Introducir la tarea
    */
    const [valorRecogido, setValorRecogido] = useState("");
    const [errorDeInput, setErrorDeInput] = useState(" ");
    const manejarCambio = (event) => {
        setValorRecogido(event.target.value);

    }
    const construirNuevaTarea = () => {

        //si el campo de texto no es vacío...
        if (valorRecogido) {
            let NuevaTarea = {
                id: Date.now(),
                texto: valorRecogido,
                completada: false,
            }
            //Añadimos a la lista de tareas el nuevo elemento
            setListaDeTareas(listaDeTareas => [NuevaTarea, ...listaDeTareas]);

            setValorRecogido('');
        }else{
            //Si está vacío muestro un error en el input
            setErrorDeInput('Este campo no puede estar vacío');
        }
    }


    return (
        <>
        <div className='introFormulario'>
            <input type="text"
                value={valorRecogido}
                name="NuevaTarea"
                id="campoParaNuevaTarea"
                onChange={manejarCambio} />
            <button onClick={construirNuevaTarea} className='btn btn-primary'>Agregar Tarea</button>
            
        </div>
        <div className='introFormulario'>
        {errorDeInput && <p className="error text-danger">{errorDeInput}</p>}
        </div>
        
        </>
    )
}
