import React, {useContext}from "react";
import styles from "./PersonajeCard.module.css";
import { GlobalContext } from "../context/GlobalState";


  export function PersonajeCard({ personaje }) {
  
    const{addPersonajeFav, favs}= useContext(GlobalContext);
    let storeFav = favs.find(o => o.name === personaje.name);
  
    const favslistDis = storeFav ? true : false;

  return (
    <li className={styles.personajeCard}>
      
        <div>Nombre: {personaje.name}</div>
        <div>Altura: {personaje.height}cm</div>
        <div>Peso: {personaje.mass}kg</div>
        <div>Fecha de nacimiento: {personaje.birth_year}</div>
        <button
        className="btn btn-primary"
        disabled={favslistDis}
        onClick={()=>addPersonajeFav(personaje)}>Añadir Fav</button>
      
    </li>
  );
}
