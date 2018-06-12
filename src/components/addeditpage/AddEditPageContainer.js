//@flow
import {localizedStrings} from "../../localization/strings";
import AddEditPage from "./AddEditPage";
import {connect} from "react-redux";
import * as actions from '../../actions/index';

const mapStateToProps=(state)=>{
    return{
        strings:localizedStrings[state.activeLanguage],
        movie:state.movieDetails,
        errorMessage: state.errorMessage,
        isFetching:state.isFetching,
        initialValues:{
            title:state.movieDetails?(state.movieDetails.title[state.activeLanguage]?state.movieDetails.title[state.activeLanguage]:
                state.movieDetails.title['def']):undefined,
            tagline:state.movieDetails?(state.movieDetails.catchy[state.activeLanguage]?state.movieDetails.catchy[state.activeLanguage]:
                state.movieDetails.catchy['def']):"",
            posterURL:state.movieDetails?(state.movieDetails.poster[state.activeLanguage]?state.movieDetails.poster[state.activeLanguage]:
                state.movieDetails.poster['def']):undefined,
            year:state.movieDetails?state.movieDetails.date:undefined,
            runtime:state.movieDetails?state.movieDetails.duration:undefined,
            chips:state.movieDetails?(state.movieDetails.genres[state.activeLanguage]?state.movieDetails.genres[state.activeLanguage]:
                state.movieDetails.genres['def']):[],
            trailer:state.movieDetails?(state.movieDetails.trailer[state.activeLanguage]?state.movieDetails.trailer[state.activeLanguage]:
                state.movieDetails.trailer['def']):undefined,
            overview:state.movieDetails?(state.movieDetails.description[state.activeLanguage]?state.movieDetails.description[state.activeLanguage]:
                state.movieDetails.description['def']):undefined,
            rt:(state.movieDetails&&state.movieDetails.rtscore)?state.movieDetails.rtscore:undefined,
            aud:(state.movieDetails&&state.movieDetails.audscore)?state.movieDetails.audscore:undefined,
            nnoscars:(state.movieDetails&&state.movieDetails.nnoscars)?state.movieDetails.nnoscars:undefined,
            nwoscars:(state.movieDetails&&state.movieDetails.nwoscars)?state.movieDetails.nwoscars:undefined,
            nnglobes:(state.movieDetails&&state.movieDetails.nnglobes)?state.movieDetails.nnglobes:undefined,
            nwglobes:(state.movieDetails&&state.movieDetails.nwglobes)?state.movieDetails.nwglobes:undefined,
            resolution:(state.movieDetails&&state.movieDetails.resolution)?state.movieDetails.resolution:undefined,
            hd:(state.movieDetails&&state.movieDetails.hd)?state.movieDetails.hd:undefined,
        },
        enableReinitialize:true,
        ids:state.idsList,
        done:state.addEditDone
    }
};




const AddEditPageContainer=connect(
    mapStateToProps,
    actions
)(AddEditPage);

export default AddEditPageContainer;