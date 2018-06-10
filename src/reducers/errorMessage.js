import {
    ADD_MOVIE_FAILURE, EDIT_MOVIE_FAILURE,
    FETCH_MOVIE_DETAILS_FAILURE,
    FETCH_MOVIE_TMDB_FAILURE,
    FETCH_MOVIES_FAILURE
} from "../actions";

const errorMessage = (state = null, action) => {

    switch (action.type) {
        case FETCH_MOVIES_FAILURE:
        case FETCH_MOVIE_DETAILS_FAILURE:
        case FETCH_MOVIE_TMDB_FAILURE:
        case ADD_MOVIE_FAILURE:
        case EDIT_MOVIE_FAILURE:
            return action.message;
        default:
            return null;
    }
};

export default errorMessage;
