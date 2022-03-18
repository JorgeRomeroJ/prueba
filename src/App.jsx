//import { Personajes } from "./components/PersonajesGrid";
import { Inicio } from "./paginas/inicio"
import { Favoritos } from "./paginas/favoritos";
import React from "react";
import styles from "./components/App.module.css";
import { GlobalProvider } from "./context/GlobalState";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export function App(){
    return (
    <GlobalProvider>
    <Router>
        <header>
            <Link to="/" ><h1 className={styles.titulo}>Personajes de Star Wars</h1></Link>
            <br></br>
            <Link to="/favoritos"><h1 className={styles.menu}>Favoritos </h1></Link>
        </header>
        <main>
        <Switch>
          <Route exact path="/favoritos"><Favoritos/></Route>
          <Route path="/"> <Inicio/> </Route>
        </Switch>
        </main>
    </Router>
    </GlobalProvider>
    );
}