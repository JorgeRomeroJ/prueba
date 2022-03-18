import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import styles from "../components/favoritos.module.css";
import { FavoritosCard } from '../components/FavoritosCard';

export const Favoritos = ()=> {
  const {favs}= useContext(GlobalContext);
    return (

      <li className={styles.FavoritosCard}>
        <p></p>
        {favs.map(favs=>(
          
          <FavoritosCard personaje={favs} type="favs"/>
        ))}
      </li>
    )
  }

export default Favoritos;