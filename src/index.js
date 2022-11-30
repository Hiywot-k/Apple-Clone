import React from 'react';
import ReactDOM from 'react-dom/client';
import "./commonResource/css/styles.css"
import "./commonResource/css/bootstrap.css"
import "./Footer/Footer.css"
import "./Sections/Section.css"
import App from './App';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


