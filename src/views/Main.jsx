import React, {useState} from "react";
// import css from "./Main.module.scss";
import CenterContainer from "../components/CenterContainer/CenterContainer";
import Slider from "../components/Slider/Slider";
import ContactUs from "../components/ContactUs/ContactUs";
import styled from "styled-components";

function Main() {
    return (
        <MainCont>
            <CenterContainer/>
        </MainCont>
    );
}

export default Main;

const MainCont = styled.main`
 flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`
