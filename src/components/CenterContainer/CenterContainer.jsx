import React from 'react';
import css from "./CenterContainer.module.scss";
import ContactUs from "../ContactUs/ContactUs";
import styled from "styled-components";

const CenterContainer = () => {
    return <CenterCont>
        <ContactUs/>
        <TextBox>
            <p>
                <div/>

                We are a group of Freelancers
                who invented a never-seen
            </p>
            <span>OUTOSRCING</span>
            <p>
                process to help you taking your
                web-project to the next level
                <div/>
            </p>
        </TextBox>
    </CenterCont>
};

export default CenterContainer;

const CenterCont = styled.div`
   
  background: linear-gradient(219.84deg, #333333 31.44%, rgba(51, 51, 51, 0.56) 93.41%, rgba(51, 51, 51, 0) 103.96%);
  max-width: calc(57rem);
  width: 100vw;
  height: 100vh;
  padding-top: 30vh;
  
  @media (max-width: 950px) {
    max-width: initial;
    width: calc(100vw - (8rem + 2vw));
    padding: 30vh 5rem 0;
  }
  @media (max-width: 850px) {
    max-width: initial;
    width: 100%;
    padding: 30vh 10% 0; 
  }
  @media (max-width: 600px) {
    max-width: initial;
    padding: 30vh 0 0 0;
  }
  ////////////
  @media (min-width: 2500px) {
    max-width: 30vw;
  }
  @media (min-width: 2000px) {
    position: relative;
    max-width: 30vw;
  }
    
    `

const TextBox = styled.div`
    
     position: relative;
  width: 100%;
  font-family: Ropa Sans;
  font-size: calc(1.1rem + 0.5vw);
  font-weight: 400;
  letter-spacing: 0.4em;
  text-align: left;
  color: white;
  padding: 0 3%;

  span {
    font-size: calc(2.5rem + 2vw);
    width: 100%;
    display: block;
    text-align: center;
    margin: 1rem 0;
    letter-spacing: 2rem;

    @media (max-width: 500px) {
    letter-spacing: calc(1rem + 1vw);
    font-size: calc( 7vw);
  }
  }

  p:nth-of-type(1) {
    line-height: 3rem;
    display: flex;
    align-items: center;

    div {
      display: inline-block;
      min-width: 2em;
      height: 1.5em;
      margin-right: 1rem;
      position: relative;
      //
      border-right: 0.3rem white solid;
    }

    div::after {
      content: '';
      width: 100%;
      height: 0.3rem;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  p:nth-of-type(2) {
    display: flex;
    line-height: 3rem;
    align-items: center;

    div {
      border-left: 0.3rem white solid;
      position: relative;
      display: inline-block;
      min-width: 2em;
      height: 1.5em;
    }

    div::after {
      content: '';
      width: 100%;
      height: 0.3rem;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
    
    `