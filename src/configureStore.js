import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import movies from "./reducers";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['activeLanguage']
};


export const configureStore=()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares = [thunk];

    const persistedReducer=persistReducer(persistConfig,movies);

    return createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
};

export const getPersistor=(store)=>{
    return persistStore(store);
}
