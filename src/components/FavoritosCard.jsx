import React, {useContext}from "react";
import styles from "./favoritos.module.css";
import { GlobalContext } from "../context/GlobalState";


  export function FavoritosCard({ personaje }) {
    
    const{removePersonajeFav}= useContext(GlobalContext);

  return (
    <li className={styles.favoritosCard}>
      
        <div>Nombre: {personaje.name}</div>
        <div>Altura: {personaje.height}cm</div>
        <div>Peso: {personaje.mass}kg</div>
        <div>Fecha de nacimiento: {personaje.birth_year}</div>
        <button
        className="btn btn-primary"
        onClick={()=>removePersonajeFav(personaje.name)}>Eliminar Fav</button>
      
    </li>
  );
}