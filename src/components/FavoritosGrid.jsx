import { FavoritosCard } from "./FavoritosCard";
import { useState } from "react";
import styles from "./PersonajesGrid.module.css";

export function Favoritos() {

    const personajesState = useState([]);
    const [favs]=personajesState;

    return (
        <ul className={styles.favoritosGrid}>
          {favs.map((favs) => (
            <FavoritosCard key={favs.name} personaje={favs} />
          ))}
        </ul>
      );
      }