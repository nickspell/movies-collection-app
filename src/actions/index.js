import {API_KEY, API_LOC, MOVIE_DETAILS_PATH} from "../remote";
import axios from 'axios';
import {languages} from "../localization/languages";

export const FETCH_MOVIES_SUCCESS='FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_REQUEST='FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_FAILURE='FETCH_MOVIES_FAILURE';
export const SET_LANGUAGE='SET_LANGUAGE';
export const SET_FILTER_TYPE='SET_FILTER_TYPE';
export const SET_SORT_TYPE='SET_SORT_TYPE';
export const TOGGLE_SORT_ORDER='TOGGLE_SORT_ORDER';
export const DELETE_MOVIE_SUCCESS='DELETE_MOVIE_SUCCESS';
export const FETCH_MOVIE_DETAILS_SUCCESS='FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_REQUEST='FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_FAILURE='FETCH_MOVIE_DETAILS_FAILURE';
export const FETCH_MOVIE_TMDB_SUCCESS='FETCH_MOVIE_TMDB_SUCCESS';
export const FETCH_MOVIE_TMDB_REQUEST='FETCH_MOVIE_TMDB_REQUEST';
export const FETCH_MOVIE_TMDB_FAILURE='FETCH_MOVIE_TMDB_FAILURE';
export const ADD_MOVIE_SUCCESS='ADD_MOVIE_SUCCESS';
export const ADD_MOVIE_FAILURE='ADD_MOVIE_FAILURE';
export const EDIT_MOVIE_SUCCESS='EDIT_MOVIE_SUCCESS';
export const EDIT_MOVIE_FAILURE='EDIT_MOVIE_FAILURE';




const fetchMoviesSuccess=(response)=>{
    return{
        type:FETCH_MOVIES_SUCCESS,
        response
    }
};

const fetchMoviesRequest=()=>{
    return{
        type:FETCH_MOVIES_REQUEST
    }
};

const fetchMoviesFailure=(message)=>{
    return{
        type:FETCH_MOVIES_FAILURE,
        message
    }
};


export const fetchMovies=()=>(dispatch,getState)=>{

    if(getState().isFetching){
        return Promise.resolve();
    }

    dispatch(fetchMoviesRequest());

    axios.get(API_LOC).then(
        response=>{
            dispatch(fetchMoviesSuccess(response.data));
        }
    ).catch(
        error=>{
            if(error.response){
                dispatch(fetchMoviesFailure(error.response.data));
            }else if(error.message){
                dispatch(fetchMoviesFailure(error.message));
            }else{
                dispatch(fetchMoviesFailure("Unknown error"));
            }

        }
    )
};


export const setLanguage=(code)=>{
    return{
        type:SET_LANGUAGE,
        code
    }
};

export const setFilterType=(filterType)=>{
    return{
        type:SET_FILTER_TYPE,
        filterType
    }
};

export const setSortType=(sortType)=>{
    return{
        type:SET_SORT_TYPE,
        sortType
    }
};

export const toggleSortOrder=()=>{
    return{
        type:TOGGLE_SORT_ORDER
    }
};

const deleteMovieSuccess=(id)=>{
    return{
        type:DELETE_MOVIE_SUCCESS,
        id
    }
};

export const deleteMovie=(id)=>(dispatch)=>{
    axios.delete(API_LOC+id).then(
        ()=>{
            dispatch(deleteMovieSuccess(id));
        }
    ).catch(
        error=>{
            console.error(error);
        }
    )
};

const fetchMovieDetailsSuccess=(response)=>{
    return{
        type:FETCH_MOVIE_DETAILS_SUCCESS,
        response
    }
};

const fetchMovieDetailsRequest=()=>{
    return{
        type:FETCH_MOVIE_DETAILS_REQUEST
    }
};

const fetchMovieDetailsFailure=(message)=>{
    return{
        type:FETCH_MOVIE_DETAILS_FAILURE,
        message
    }
};

export const fetchMovieDetails=(id)=>(dispatch,getState)=>{

    if(getState().isFetching){
        return Promise.resolve();
    }

    dispatch(fetchMovieDetailsRequest());

    axios.get(API_LOC+id).then(
        response=>{
            dispatch(fetchMovieDetailsSuccess(response.data));
        }
    ).catch(
        error=>{
            if(error.response){
                dispatch(fetchMovieDetailsFailure(error.response.data));
            }else if(error.message){
                dispatch(fetchMovieDetailsFailure(error.message));
            }else{
                dispatch(fetchMovieDetailsFailure("Unknown error"));
            }

        }
    )
};


const fetchTMDBSuccess=(results,langs)=>{
    return{
        type:FETCH_MOVIE_TMDB_SUCCESS,
        results,
        langs
    }
};

const fetchTMDBRequest=()=>{
    return{
        type:FETCH_MOVIE_DETAILS_REQUEST
    }
};

const fetchTMDBFailure=(message)=>{
    return{
        type:FETCH_MOVIE_DETAILS_FAILURE,
        message
    }
};

export const fetchTMDB=(id)=>(dispatch,getState)=>{
    if(getState().isFetching){
        return Promise.resolve();
    }

    dispatch(fetchTMDBRequest());
    const url=MOVIE_DETAILS_PATH+id+'?api_key='+API_KEY+'&append_to_response=images,videos&language=';
    let promises=[];
    let langs=[];
    Object.keys(languages).forEach(
        key=>{
            const urlLang=url+languages[key].code;
            promises.push(axios.get(urlLang));
            langs.push(key);
        }
    );

    axios.all(promises).then(
        results=>{
            dispatch(fetchTMDBSuccess(results,langs));
        }
    ).catch(
        error=>{
            if(error.response){
                dispatch(fetchTMDBFailure(error.response.data));
            }else if(error.message){
                dispatch(fetchTMDBFailure(error.message));
            }else{
                dispatch(fetchTMDBFailure("Unknown error"));
            }

        }
    )

};


const addMovieSuccess=()=>{
    return{
        type:ADD_MOVIE_SUCCESS,
    }
};

const addMovieFailure=(message)=>{
    return{
        type:ADD_MOVIE_FAILURE,
        message
    }
};

export const addMovie=(movie)=>(dispatch)=>{

    axios.post(API_LOC,{
        ...movie,
        headers: {'Content-Type': 'application/json'},
    }).then(
        ()=>{
            dispatch(addMovieSuccess());
        }
    ).catch(
        error=>{
            if(error.response){
                dispatch(addMovieFailure(error.response.data));
            }else if(error.message){
                dispatch(addMovieFailure(error.message));
            }else{
                dispatch(addMovieFailure("Unknown error"));
            }

        }
    )
};


const editMovieSuccess=()=>{
    return{
        type:EDIT_MOVIE_SUCCESS,
    }
};

const editMovieFailure=(message)=>{
    return{
        type:EDIT_MOVIE_FAILURE,
        message
    }
};


export const editMovie=(id,movie)=>(dispatch)=>{
    //console.log(movie);
    axios.put(API_LOC+id+'/',{
            ...movie,
            headers: {'Content-Type': 'application/json'},
    }).then(
        ()=>{
            dispatch(editMovieSuccess());
        }
    ).catch(
        error=>{
            if(error.response){
                dispatch(editMovieFailure(error.response.data));
            }else if(error.message){
                dispatch(editMovieFailure(error.message));
            }else{
                dispatch(editMovieFailure("Unknown error"));
            }

        }
    )
};
