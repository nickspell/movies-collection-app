import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/css/main.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {configureStore, getPersistor} from "./configureStore";
import {PersistGate} from "redux-persist/es/integration/react";


const store=configureStore();
const persistor=getPersistor(store);

//str.strings.setLanguage("it");


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

