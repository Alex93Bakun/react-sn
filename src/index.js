import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/redux-store";


import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


reportWebVitals();
