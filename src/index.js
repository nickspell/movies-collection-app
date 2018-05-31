import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/css/main.css';
import {createStore} from "redux";
import {Provider} from "react-redux";

const store=createStore(state=>state);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

