//@flow
import {localizedStrings} from "../../localization/strings";
import {connect} from "react-redux";
import DetailPage from "./DetailPage";
import * as actions from '../../actions/index';

const mapStateToProps=(state)=>{
    return{
        activeLanguage:state.activeLanguage,
        strings:localizedStrings[state.activeLanguage],
        movie:state.movieDetails,
        errorMessage: state.errorMessage,
        isFetching:state.isFetching
    }
};

const DetailPageContainer=connect(
    mapStateToProps,
    actions
)(DetailPage);

export default DetailPageContainer;
