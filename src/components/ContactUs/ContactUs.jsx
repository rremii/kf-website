import React from 'react';
import css from './ContactUs.module.scss'
import styled from "styled-components";

const ContactUs = () => {
    return <Wrapper>
        <div/>
        <div/>
        <div/>
        <span>ontact us</span>
    </Wrapper>
};

export default ContactUs;

const Wrapper = styled.div`
  position: absolute;
  top: 55vh;
  right: 0;
  width: 100vw;
  height: 8rem;

  @media (min-width: 2000px) {
    right: -10rem;
  }
  @media (min-width: 2500px) {
    right: 0;
  }

  span {
    font-family: Ropa Sans;
    font-size: calc(2rem + 1vw);
    font-weight: 400;
    color: #FBC400;
    position: absolute;
    right: calc(10rem + 10vw);
    top: 45%;
    letter-spacing: 1.7rem;
  }

  div {
    position: absolute;
    background: #FBC400;
    height: calc(0.3rem + 0.2vw);



    max-height: 0.6rem;
  }

  div:nth-of-type(1) {
    top: 50%;
    right: calc(35rem + 15vw);
    width: 100%;
  }

  div:nth-of-type(2) {
    top: 25%;
    right: calc(30rem + 15vw);
    width: 6rem;
    transform: rotate(-45deg);
  }

  div:nth-of-type(3) {
    bottom: 27%;
    right: calc(32rem + 15vw);
    width: 4rem;
    transform: rotate(45deg);
  }

  @media (max-width: 600px) {
    width: 100vw;
    div:nth-of-type(1) {
      right: 90%;
    }
    div:nth-of-type(2) {
      right: initial;
      left: 8%;
    }
    div:nth-of-type(3) {
      right: initial;
      left: 8%;
    }
    span {
      right: initial;
      left: 17%;
    }
  }
    
    `