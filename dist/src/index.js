import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/css/main.css';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore, getPersistor } from "./configureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const store = configureStore();
const persistor = getPersistor(store);

//str.strings.setLanguage("it");


ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(
        PersistGate,
        { loading: null, persistor: persistor },
        React.createElement(
            BrowserRouter,
            null,
            React.createElement(App, null)
        )
    )
), document.getElementById('root'));
//# sourceMappingURL=index.js.map