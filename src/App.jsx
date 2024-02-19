import './App.css';
/* import Boton from './components/Boton/Boton';
import Pantalla from './components/Pantalla/Pantalla';
import Perfil from './components/Perfil/Perfil';
import React, { useState } from 'react' */
import { FaCheck } from "react-icons/fa";
import FormularioTareas from './components/IntroducirTareas/FormularioTareas';
import { useState } from 'react';
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas';

function App() {

  const listaTareas= [
    {
      id:1,
      texto: "Hacer la compra",
      completada: false,
    },
    {
      id:2,
      texto: "Hacer la cama",
      completada: false,
    },
    {
      id:3,
      texto: "Hacer la tarea",
      completada: true,
    },
  ];

  const [listaDeTareas,setListaDeTareas]=useState(listaTareas);
  /* function handleClick() {
    setNumeroDeClicks(numeroDeClicks + 1);
  };
  const[numeroDeClicks,setNumeroDeClicks]=useState(0); */
  return (
    <>
   {/*  <h1>Esta es mi app</h1>
    <Boton handleClick={handleClick}/>
    <Pantalla numeritinDeClicks={numeroDeClicks}/>
    <Perfil /> */}
    <FormularioTareas listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas}/>
    <ListaDeTareas listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas}/>

    </>
  );
}

export default App;
