import {SET_LANGUAGE} from "../actions";
import {languages} from "../localization/languages";

const activeLanguage=(state='it',action)=>{
    switch (action.type){
        case SET_LANGUAGE:
           return languages[action.code]?action.code:state;
        default:
            return state;
    }
};

export default activeLanguage;