import "./App.scss";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./views/Main";
import NavBar from "./components/NavBar/NavBar";
import Social from "./components/Social/Social";
import logo from'./assets/logo.png'
function App() {


    return (

        <div className="App">
            <Routes>
                <Route path="/" exact element={<Main/>}/>
            </Routes>

            <NavBar/>
            <Social/>
            <img className="logo" src={logo} alt=""/>
        </div>

    );
}

export default App;

