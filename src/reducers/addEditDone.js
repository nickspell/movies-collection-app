import {ADD_MOVIE_FAILURE, ADD_MOVIE_SUCCESS, EDIT_MOVIE_FAILURE, EDIT_MOVIE_SUCCESS, RESET_DONE} from "../actions";


const addEditDone=(state=false,action)=>{
    switch (action.type){
        case ADD_MOVIE_SUCCESS:
        case EDIT_MOVIE_SUCCESS:
        case ADD_MOVIE_FAILURE:
        case EDIT_MOVIE_FAILURE:
            return true;
        case RESET_DONE:
            return false;
        default:
            return state;
    }
};

export default addEditDone;