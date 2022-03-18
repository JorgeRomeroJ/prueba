import { useEffect, useState } from "react";
import { PersonajeCard } from "./PersonajeCard";
import styles from "./PersonajesGrid.module.css";

export function Personajes() {
  //let personajes = [];
  const personajesState = useState([]);
  const [personajes, setPersonajes]=personajesState;

useEffect(()=>{
  let promiseLoop = [];
  for (let i = 0; i < 9; i++){
       //la paginacion comienza en i+1
       promiseLoop[i] = fetch(`https://swapi.dev/api/people/?page=${i+1}`)
       .then(res => res.json());
  }
  Promise.all(promiseLoop).then(values => {
    //values es un array de resultados de promesas en promiseLoop
    //nivelando la estructura con flatMap
    //la propiedad que nos interesa es results
    const personajes = values.flatMap(value => [...value.results])
    setPersonajes(personajes);
});
},[])
  
//Para solo una página de API
 /* useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((result) => result.json())
      .then((data) => {
        setPersonajes (data.results);
      });
  });*/
  return (
    <ul className={styles.personajesGrid}>
      {personajes.map((personaje) => (
        <PersonajeCard key={personaje.name} personaje={personaje} />
      ))}
    </ul>
  );
}
