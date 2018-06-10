import {connect} from "react-redux";
import IntegrationAutosuggest from "./IntegrationAutosuggest";
import * as actions from '../../actions/index';

const mapStateToProps=(state)=>{
    return{
        activeLanguage:state.activeLanguage
    }
};


const IntegrationAutosuggestContainer=connect(
    mapStateToProps,
    actions
)(IntegrationAutosuggest);


export default IntegrationAutosuggestContainer;