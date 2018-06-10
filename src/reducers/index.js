import {combineReducers} from "redux";
import byID from './byID';
import {reducer as formReducer} from "redux-form";
import idsList from "./idsList";
import isFetching from "./isFetching";
import errorMessage from "./errorMessage";
import activeLanguage from "./activeLanguage";
import filterType from "./filterType";
import sortType from "./sortType";
import sortOrder from "./sortOrder";
import deletedMovie from "./deletedMovie";
import movieDetails from "./movieDetails";
import addEditDone from "./addEditDone";


const movies = combineReducers({
    byID,
    idsList,
    isFetching,
    errorMessage,
    activeLanguage,
    filterType,
    sortType,
    sortOrder,
    deletedMovie,
    movieDetails,
    addEditDone,
    form: formReducer     // <---- Mounted at 'form'
});

export default movies;



export const getMovies=(state)=>{
    const ids=state.idsList;
    return ids.map(id=>state.byID[id]);
};

