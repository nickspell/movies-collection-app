import {FETCH_MOVIES_SUCCESS} from "../actions";

const ids=(state=[],action)=>{
    switch(action.type){
        case FETCH_MOVIES_SUCCESS:
            return action.response.map(movie=>movie.mvid);
        default:
            return state
    }
};

export default ids;

