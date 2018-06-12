import {FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_TMDB_SUCCESS, RESET_MOVIE} from "../actions";

const movieDetails=(state=null,action)=>{
    switch (action.type){
        case FETCH_MOVIE_DETAILS_SUCCESS:
            return action.response;
        case FETCH_MOVIE_TMDB_SUCCESS:
            if(action.results){
                let newState={};
                const defaultTruth=action.results[0].data;
                newState.mvid=null;
                newState.title={def:defaultTruth.title};
                newState.poster={def:defaultTruth['poster_path'].slice(1)};
                const alldate=new Date(defaultTruth['release_date']);
                newState.date=alldate.getFullYear();
                newState.duration=defaultTruth.runtime;
                if(defaultTruth.videos.results.length){
                    newState.trailer={def:defaultTruth.videos.results[0].key};
                }
                newState.catchy={def:defaultTruth.tagline};
                newState.description={def:defaultTruth.overview};
                newState.genres={def:defaultTruth.genres.map(
                    genre=> genre.name)};
                newState.useTMDB=true;
                newState.tmdbID=defaultTruth.id;
                newState.imdbID=defaultTruth['imdb_id'];
                action.results.forEach(
                    (result,i)=>{
                        const dets=result.data;
                        const language=action.langs[i];
                        newState.title[language]=dets.title;
                        newState.poster[language]=dets['poster_path'].slice(1);
                        if(dets.videos.results.length){
                            if(!newState.trailer)
                                newState.trailer={def:dets.videos.results[0].key};
                            newState.trailer[language]=dets.videos.results[0].key;

                        }
                        newState.catchy[language]=dets.tagline;
                        newState.description[language]=dets.overview;
                        newState.genres[language]=dets.genres.map(genre=>genre.name);
                    }
                );

                if(!newState.trailer)
                    newState.trailer={def:''};
                return newState;
            }else{
                return state;
            }
        case RESET_MOVIE:
            return null;
        default:
            return state;
    }
};

export default movieDetails;