import React,{createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"

//Estado inicial
const initialState ={
    favs:localStorage.getItem('favs')?JSON.parse(localStorage.getItem('favs')):[],
};

//contexto
export const GlobalContext = createContext(initialState);

//componente proveedor
export const GlobalProvider = props => {
    const [state, dispatch]= useReducer(AppReducer,initialState);

useEffect(()=>{
    localStorage.setItem('favs',JSON.stringify(state.favs))
},[state])


//accion agregar a favoritos
const addPersonajeFav = favs =>{
    dispatch({type:"ADD_PERSONAJE_FAV", payload: favs})
}
//accion quitar de favoritos
const removePersonajeFav = (name) =>{
    dispatch({type: "REMOVE_PERSONAJE_FAV", payload: name})
}


    return (
        <GlobalContext.Provider value={{favs: state.favs, addPersonajeFav, removePersonajeFav}}>
            {props.children}
        </GlobalContext.Provider>
    )

}