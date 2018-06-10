import {ADD_MOVIE_FAILURE, ADD_MOVIE_SUCCESS, EDIT_MOVIE_FAILURE, EDIT_MOVIE_SUCCESS} from "../actions";


const addEditDone=(state=false,action)=>{
    switch (action.type){
        case ADD_MOVIE_SUCCESS:
        case EDIT_MOVIE_SUCCESS:
        case ADD_MOVIE_FAILURE:
        case EDIT_MOVIE_FAILURE:
            return true;
        default:
            return state;
    }
};

export default addEditDone;