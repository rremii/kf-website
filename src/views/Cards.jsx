import styled from "styled-components";
import React from "react";
import Slider from "../components/Slider/Slider";

const Cards = () => {
  return (
    <CardsCont>
      <Slider />
    </CardsCont>
  );
};
export default Cards;
const CardsCont = styled.div`
  /* padding-top: 5vh; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(46, 46, 46, 0.568);
`;
