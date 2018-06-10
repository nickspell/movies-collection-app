import {
    FETCH_MOVIE_DETAILS_FAILURE,
    FETCH_MOVIE_DETAILS_REQUEST,
    FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_TMDB_FAILURE, FETCH_MOVIE_TMDB_REQUEST, FETCH_MOVIE_TMDB_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS
} from "../actions";

const isFetching=(state=false,action)=>{
    switch(action.type){
        case FETCH_MOVIES_SUCCESS:
        case FETCH_MOVIE_DETAILS_SUCCESS:
        case FETCH_MOVIE_TMDB_SUCCESS:
            return false;
        case FETCH_MOVIES_REQUEST:
        case FETCH_MOVIE_DETAILS_REQUEST:
        case FETCH_MOVIE_TMDB_REQUEST:
            return true;
        case FETCH_MOVIES_FAILURE:
        case FETCH_MOVIE_DETAILS_FAILURE:
        case FETCH_MOVIE_TMDB_FAILURE:
            return false;
        default:
            return state;
    }
};

export default isFetching;

