import "./App.scss";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./views/Main";
import NavBar from "./components/NavBar/NavBar";
import Social from "./components/Social/Social";
import logo from "./assets/logo.png";
import styled from "styled-components";
import bg from "./assets/mainBG.png";
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" exact element={<Main />} />
//       </Routes>

//       <NavBar />
//       <Social />
//       <img className="logo" src={logo} alt="" />
//     </div>
//   );
// }
function App() {
    return (
        <AppCont>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
            </Routes>

            <NavBar/>
            <Social/>
            <Logo>

                <img  src={logo} alt=""/>
            </Logo>
        </AppCont>
    );
}

export default App;

const AppCont = styled.div`
  display: flex;
  width: 100%;
  min-height: 150vh;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.19%),
    url(${bg}) black;
  justify-content: flex- end;
  padding-right: calc(8rem + 2vw);
  background-size: cover;
  @media (max-width: 600px) {
    padding-right: 0;
  }
  @media (min-width: 2500px) {
    padding-right: calc(25vw);
  }
`;
const Logo = styled.div`
  position: fixed;
  top: 2%;
  left: 2%;
  width: calc(20rem + 10vw);
    img{
    width:100%;
    height:100%;
    }
  @media (max-width: 600px) {
    background-size: cover;
    height: calc(5rem + 5vw);
    width: calc(100vw - (5rem + 5vw));
    top: 0;
    left: 0;
  }
`;
