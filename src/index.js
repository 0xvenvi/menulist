import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'


ReactDOM.render(

    <BrowserRouter>
        <div className="main-body">
        <Header/>
        <App/>
        <Footer/>
        </div>
    </BrowserRouter>

,
document.getElementById("root")
)