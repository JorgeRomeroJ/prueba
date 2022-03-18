// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type){
        case "ADD_PERSONAJE_FAV":
        return{
            ...state,
            favs:[action.payload, ...state.favs],
        };
        case"REMOVE_PERSONAJE_FAV":
        return{
            ...state,
            favs: state.favs.filter(favs => favs.name !== action.payload),
        }
        default:
            return state;
    }
};