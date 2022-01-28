import React from 'react';
import css from './Social.module.scss'
import facebook from './../../assets/facebook.png'
import styled from "styled-components";

// const Social = () => {
//     return <div className={css.Social}>
//         <span>SOCIAL</span>
//         <div/>
//
//         <section>
//             <img src={facebook} alt=""/>
//             <img src={facebook} alt=""/>
//             <img src={facebook} alt=""/>
//             <img src={facebook}
//                  alt=""/>
//
//         </section>
//     </div>
// };
const Social = () => {
    return <SocialCont>
        <span>SOCIAL</span>
        <div/>
        <section>
            <img src={facebook} alt=""/>
            <img src={facebook} alt=""/>
            <img src={facebook} alt=""/>
            <img src={facebook}
                 alt=""/>

        </section>
    </SocialCont>
};

export default Social;

const SocialCont = styled.div`
  position: fixed;
  bottom: 1%;
  left: 2%;
  color: #FFFFFF;
  width: 4.5rem;
  flex-direction: column;
  display: flex;
  background-color: #191919;
  align-items: center;
  z-index:101;
  padding-bottom: calc(1rem + 0.1vw);
  @media (max-width: 600px) {

    bottom: 0;
    left: 0;
  }
  span{
    color: #666565;
    font-size: 1.5rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.5rem;
    font-family: Ropa Sans;
    font-weight: 700;
  }
  div{
    width: 100%;
    height: calc(5rem + 1vw);
    position: relative;
  }
  div::after{
    content: '';
    position: absolute;
    width: 0.3rem;
    height: 70%;
    background-color: #666565;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  section{
    width: 70%;
    img{
      width: 100%;
      background-color: transparent;
      margin: 0.3rem 0;
    }
  }
    `