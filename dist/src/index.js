import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/css/main.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as str from './localization/strings';
import { BrowserRouter } from "react-router-dom";

const store = createStore(state => state);

str.strings.setLanguage("gb");

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(
        BrowserRouter,
        null,
        React.createElement(App, null)
    )
), document.getElementById('root'));
//# sourceMappingURL=index.js.map