import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App/App.jsx';
import {Router} from "@reach/router";

ReactDOM.render(
    <Router>
        <App path={"/"} />
    </Router>
    , document.getElementById('root'));

