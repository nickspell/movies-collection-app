import {TOGGLE_SORT_ORDER} from "../actions";

const sortOrder=(state=true,action)=>{
    switch (action.type){
        case TOGGLE_SORT_ORDER:
            return !state;
        default:
            return state;
    }
};

export default sortOrder;