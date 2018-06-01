import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/css/main.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import * as str from './localization/strings'

const store=createStore(state=>state);


str.strings.setLanguage("gb");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

