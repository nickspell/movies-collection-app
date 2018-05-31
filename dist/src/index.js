import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/css/main.css';
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(state => state);

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(App, null)
), document.getElementById('root'));
//# sourceMappingURL=index.js.map