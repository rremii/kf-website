import React from 'react';
import css from './NavBar.module.scss'
import styled from "styled-components";

// const NavBar = () => {
//     return <nav>
//         <div>
//             <span></span><span></span><span></span>
//         </div>
//     </nav>
// };

const NavBar = () => {
    return <Nav>
        <div>
            <span></span><span></span><span></span>
        </div>
    </Nav>
};
export default NavBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: calc(8rem + 2vw);
  background: #464646;
  @media (max-width: 850px) {
    font-size: calc(5rem + 5vw);
    width: 1em;
    height: 1em;
  }

  div {
    width: calc(8rem + 2vw);
    height: calc(8rem + 2vw)  ;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      font-size: calc(5rem + 5vw);
      width: 1em;
      height: 1em;
    }
    span {
      margin: 0.4rem 0;
      width: 5rem;
      height: 0.5rem;
      background: linear-gradient(269.7deg, #FFFFFF -2.68%, rgba(255, 255, 255, 0) 99.8%), linear-gradient(0deg, #FBC400, #FBC400);
    }

    span:nth-of-type(1) {
      clip-path: polygon(0.5rem 0%, 100% 0%, 100% 100%, 0 100%);
    }

    span:nth-of-type(3) {
      clip-path: polygon(0% 0%, 100% 0%, calc(100% - 0.5rem) 100%, 0 100%);
    }
  }
    
    
    `